import UnicornScene from "unicornstudio-react";

export default function Footer() {
  return (
    <div style={{ width: "1920px", height: "900px" }}>
      <UnicornScene
        jsonFilePath="/unicorn/footerScene.json"
        width="1920px"
        height="900px"
        scale={1}
        dpi={3}
        lazyLoad={false}
        production={true}
        altText="Footer Scene"
        onLoad={() => console.log("Scene loaded")}
        onError={(err) => console.error("Error loading scene", err)}
      />
    </div>
  );
}