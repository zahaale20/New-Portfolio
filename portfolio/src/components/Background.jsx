import UnicornScene from "unicornstudio-react";

const Background = ({ theme, handleSceneLoad }) => {
  return (
    <div className={`background transition-filter duration-1500 ease-in-out ${theme === "light" ? "filter-invert-and-brighten" : ""}`}>
      <UnicornScene
        jsonFilePath="/unicorn/lightsScene.json"
        width="3440px"
        height="1400px"
        scale={1}
        dpi={1}
        lazyLoad={false}
        production={true}
        altText="Lights Scene"
        style={{ width: "100%", height: "100%" }}
        onLoad={handleSceneLoad}
        onError={(err) => console.error("Error loading lights scene", err)}
      />
    </div>
  );
};

export default Background;
