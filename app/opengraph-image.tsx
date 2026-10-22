import { ImageResponse } from "next/og";

export const alt = "CraftN — Software and AI studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#fbfaf7", color: "#192c2b", fontFamily: "Arial, sans-serif", padding: "72px" }}>
      <div style={{ position: "absolute", width: "540px", height: "540px", border: "1px solid #e1e9d5", borderRadius: "50%", right: "-4px", top: "42px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "380px", height: "380px", border: "1px dashed #d6e2c5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "174px", height: "174px", borderRadius: "50%", background: "#192c2b", color: "#caef67", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "74px" }}>✳</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "22px", letterSpacing: "5px", color: "#718078", marginBottom: "32px" }}>INDEPENDENT SOFTWARE &amp; AI STUDIO</div>
        <div style={{ fontWeight: 800, fontSize: "79px", lineHeight: 1.03, letterSpacing: "-5px" }}>Good ideas<br/>deserve <span style={{ color: "#8cac43" }}>great</span><br/>technology.</div>
        <div style={{ fontSize: "25px", color: "#718078", marginTop: "28px" }}>Thoughtful software. Practical AI. Built around people.</div>
      </div>
    </div>,
    { ...size },
  );
}
