import { useState } from "react";
import "./QRCode.css";
import QRCodeInfo from "../QRCodeInfo/QRCodeInfo";

function QRCode() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState<JSX.Element | null>(null);
  const [qrCodeData, setQrCodeData] = useState({
    url: "",
    requestDateTime: "",
  });

  const generateQRCode = () => {
    if (!url) {
      return;
    }
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${url}`;
    setQrCode(<img src={apiUrl} alt="QR" />);
    setQrCodeData({
      url,
      requestDateTime: new Date().toLocaleString(),
    });
    setUrl("");
  };

  return (
    <div data-testid="Generate_QR_code" className="Generate_QR_code">
      <h1>Generate QR code</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR code</button>
      {qrCode && (
        <div className="QR_code">
          <h2>QR code has been created successfully</h2>
          {qrCode}
          <QRCodeInfo
            url={qrCodeData.url}
            requestDateTime={qrCodeData.requestDateTime}
          />
        </div>
      )}
    </div>
  );
}

export default QRCode;
