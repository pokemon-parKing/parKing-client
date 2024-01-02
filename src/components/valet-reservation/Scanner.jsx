import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = () => {
  const [scanResult, setScanResult] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    scanner.render(onScanSuccess, onScanError);
    function onScanSuccess(result) {
      scanner.clear();
      setScanResult(result);
      console.log("Decoded QR code data: ", result);
      window.location.href = `http://127.0.0.1:5173/valetReservation/reservationDetails/${result}`;
    }
    function onScanError(error) {
      console.warn(error);
    }
    return () => {
      scanner.clear();
    }
  }, []);
  return (
    <>
      <div>
        <h1>QR Code Scanner</h1>
        <h2>scan result: {scanResult}</h2>
        {scanResult ? (
          <div>
            Success: <a href={scanResult}>{scanResult}</a>
          </div>
        ) : (
          <div id="reader"></div>
        )}
      </div>
    </>
  );
};
export default Scanner;
