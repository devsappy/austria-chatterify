import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CALENDLY_URL = "https://calendly.com/chatterifyservice/new-meeting";

type BookingBody = {
  name?: string;
  email?: string;
  phone?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  source?: string;
};

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isSafeDate(v: string) {
  // ISO date YYYY-MM-DD
  return /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v));
}

function isSafeTime(v: string) {
  // HH:MM 24h
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(v);
}

const MAX_NAME = 120;
const MAX_PHONE = 60;
const MAX_MESSAGE = 4000;

export async function POST(request: Request) {
  let body: BookingBody;
  try {
    body = (await request.json()) as BookingBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const preferredDate = (body.preferredDate || "").trim();
  const preferredTime = (body.preferredTime || "").trim();
  const message = (body.message || "").trim();

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name fehlt.";
  else if (name.length > MAX_NAME) errors.name = "Name zu lang.";
  if (!email) errors.email = "E-Mail fehlt.";
  else if (!isValidEmail(email)) errors.email = "E-Mail ungültig.";
  if (phone && phone.length > MAX_PHONE) errors.phone = "Telefonnummer zu lang.";
  if (preferredDate && !isSafeDate(preferredDate)) errors.preferredDate = "Datum ungültig.";
  if (preferredTime && !isSafeTime(preferredTime)) errors.preferredTime = "Uhrzeit ungültig.";
  if (message.length > MAX_MESSAGE) errors.message = "Nachricht zu lang.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed", fields: errors }, { status: 422 });
  }

  try {
    const client = await getMongoClient();
    const db = client.db();
    const col = db.collection("booking_requests");

    await col.insertOne({
      name,
      email,
      phone,
      preferredDate: preferredDate || null,
      preferredTime: preferredTime || null,
      message: message || null,
      source: (body.source || "handwerker-auftritt.de").slice(0, 200),
      status: "new",
      createdAt: new Date(),
      userAgent: (request.headers.get("user-agent") || "").slice(0, 500),
      ip: (request.headers.get("x-forwarded-for") || "").split(",")[0].trim().slice(0, 64) || null,
    });
  } catch (err) {
    console.error("Failed to persist booking request:", err);
    return NextResponse.json({ error: "Database error." }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    redirectUrl: CALENDLY_URL,
  });
}

export async function GET() {
  return NextResponse.json({ ok: true, endpoint: "booking" });
}