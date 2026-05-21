import { ImageResponse } from "next/og";
import { SITE } from "@/lib/seo-data";

export const runtime = "edge";
export const alt = "Handwerker Auftritt — Webdesign für Handwerker und lokale Betriebe";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f6f1e8",
          color: "#111111",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ alignItems: "center", display: "flex", gap: 20 }}>
            <div style={{ background: "#111111", height: 54, width: 54 }} />
            <div style={{ fontSize: 36, fontWeight: 700 }}>{SITE.name}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ color: "#8a3b17", fontSize: 28, fontWeight: 700 }}>
              Webdesign · Lokales SEO · DSGVO
            </div>
            <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2, lineHeight: 0.96, maxWidth: 820 }}>
              Websites für Handwerker und lokale Betriebe.
            </div>
          </div>
          <div style={{ color: "#555555", fontSize: 28 }}>
            Deutschland · Österreich · DACH
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            alignSelf: "stretch",
            background: "#111111",
            color: "#f6f1e8",
            display: "flex",
            fontSize: 30,
            justifyContent: "center",
            padding: 28,
            writingMode: "vertical-rl",
          }}
        >
          handwerker-auftritt.de
        </div>
      </div>
    ),
    size
  );
}
