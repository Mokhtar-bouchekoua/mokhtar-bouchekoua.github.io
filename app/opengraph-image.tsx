import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#f6f7f5", color: "#172138", padding: 68, fontFamily: "Arial, sans-serif" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 17, fontSize: 24, fontWeight: 700 }}>
          <div style={{ width: 54, height: 54, borderRadius: 14, background: "#172138", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 21 }}>MB</div>
          Mokhtar Bouchekoua
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#315ce5", fontSize: 20, fontWeight: 700, letterSpacing: 4, marginBottom: 24 }}>AI &amp; FULL STACK ENGINEER</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700, letterSpacing: -5, lineHeight: 1.06, maxWidth: 800 }}><span>Intelligent systems.</span><span>Real problems.</span></div>
        </div>
        <div style={{ color: "#647184", fontSize: 20 }}>Applied AI · Real-time data · Software engineering</div>
      </div>
      <div style={{ display: "flex", width: 245, alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 230, height: 230, borderRadius: 115, border: "2px solid #b6c8ff", background: "#e9eeff", display: "flex", alignItems: "center", justifyContent: "center", color: "#315ce5", fontSize: 130 }}>✳</div>
      </div>
    </div>,
    size,
  )
}
