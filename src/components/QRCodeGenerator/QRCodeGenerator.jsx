import { useState } from "react";
import QRCode from "react-qr-code";
// css
import "./qr-code-generator.css";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("uttam");

  // function
  function handleQRCodeGenerate() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="qr-code-generator-container flex-center flex-col">
      <h1 className="heading text-center mb-1">QR Code Generator</h1>
      <form className="input mb-1">
        <input
          type="text"
          name="qr-value"
          id="qr-value"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          disabled={input ? false : true}
          onClick={handleQRCodeGenerate}
        >
          Generate
        </button>
      </form>
      <QRCode value={qrCode} size={480} />
    </div>
  );
};

export default QRCodeGenerator;
