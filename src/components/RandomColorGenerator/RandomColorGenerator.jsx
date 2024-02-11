import { useState } from "react";
// css
import "./random-color-generator.css";
// icon
import { CopyIcon } from "../../constants/icons.js";

const RandomColorGenerator = () => {
  const [hsl, setHsl] = useState({
    hue: 214,
    saturation: 75,
    lightness: 19,
  });

  const complementaryColor = {
    hue: 360 - hsl.hue,
    saturation: 100 - hsl.saturation,
    lightness: 100 - hsl.lightness,
  };

  const complementaryColorHSL = `hsl(${complementaryColor.hue}, ${complementaryColor.saturation}%, ${complementaryColor.lightness}%)`;
  const color = `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`;
  const color50 = `hsl(${hsl.hue}, ${hsl.saturation}%, ${(hsl.lightness =
    hsl.lightness > 5 ? hsl.lightness - 5 : hsl.lightness)}%)`;
  // const [color, setColor] = useState(
  //   `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`
  // );

  const generateRandomButtonStyles = {
    backgroundColor: complementaryColorHSL,
    border: `1px solid ${color}`,
    color: color,
  };

  // function
  // handle generate random color
  function handleGenerateRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 100);
    setHsl({ hue: hue, saturation: saturation, lightness: lightness });
  }
  const copyText = `random-color: ${color};\ncomplementary-color: ${complementaryColorHSL}`;
  function handleCopy(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Text copied!"))
      .catch(() => alert("Error!"));
  }

  return (
    <section
      className="random-color-generator-container"
      style={{ backgroundColor: color }}
    >
      <div className="container absolute-center">
        <div
          className="random-color-heading flex-between mb-1 p-1 br-5 gap-4 ai-flex-start"
          style={{ backgroundColor: color50, color: complementaryColorHSL }}
        >
          <div className="flex-col">
            <p className="color-values">
              <strong>Random Color: </strong>
              <span className="p-4">{color}</span>
            </p>
            <p className="color-values">
              <strong>Complmentary Color: </strong>
              <span className="p-4">{complementaryColorHSL}</span>
            </p>
          </div>
          <CopyIcon onClick={() => handleCopy(copyText)} className="pointer" />
        </div>
        <div className="color-buttons flex-col gap-8">
          {/* <button style={otherButtonStyle}>Create HEX</button> */}
          <button
            style={generateRandomButtonStyles}
            onClick={handleGenerateRandomColor}
          >
            Generate Random Color
          </button>
        </div>
      </div>
    </section>
  );
};

export default RandomColorGenerator;
