import { useState } from "react";

interface QRCodeInfoProps {
  url: string;
  requestDateTime: string;
}

function QRCodeInfo({ url, requestDateTime }: QRCodeInfoProps) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="QR_code_info">
      <h2>QR Code Information</h2>
      {showInfo && (
        <>
          <p>URL: {url}</p>
          <p>Request Date and Time: {requestDateTime}</p>
        </>
      )}
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide Info" : "Show Info"}
      </button>
    </div>
  );
}

export default QRCodeInfo;
