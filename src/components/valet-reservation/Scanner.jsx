import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

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
      window.location.href = `http://localhost:5173/valetReservation/reservationDetails/${result}`;
    }
    function onScanError(error) {
      console.warn(error);
    }

    //grabbing elements in the dom and changing their styles
    const scanRegion = document.getElementById("reader");
    if (scanRegion) {
      scanRegion.style.textDecoration = "none";
      scanRegion.classList.add("min-w-[275px]", "max-h-[60vh]", "min-h-[40vh]", "flex", "flex-col", "shadow-lg")
    }

    const permissionButton = document.getElementById("html5-qrcode-button-camera-permission");
    if (permissionButton) {
      permissionButton.textContent = "Camera";
      permissionButton.classList.add(
        "btn",
        "btn-active",
        "mx-auto",
        "bg-black", "border-black",
        "text-white",
        "btn-primary",
        "btn-block",
        "max-w-[200px]",
        "mt-12",
        "mb-2.5"
        );
    }

    const uploadQrCodeButton = document.getElementById("html5-qrcode-anchor-scan-type-change");
    if (uploadQrCodeButton) {
      uploadQrCodeButton.textContent = "Upload";
      uploadQrCodeButton.style.textDecoration = "none";
      uploadQrCodeButton.classList.add(
        "btn",
        "btn-active",
        "mx-auto",
        "bg-black", "border-black",
        "text-white",
        "btn-primary",
        "btn-block",
        "max-w-[200px]",
        "my-0"
        );
    }

    return () => {
      scanner.clear();
    }
  }, []);

  return (
    <>
      <div className="mt-8 text-center p-8 bg-gray-100 shadow-md rounded-md">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Scan or Upload</h3>
        </div>
        {scanResult ? (
          <div>
            Success: <a href={scanResult}>{scanResult}</a>
          </div>
        ) : (
          <div id="reader" className=""></div>
        )}
        <div className="my-10">
        <Link to='/valet' className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[200px]">Back</Link>
        </div>
      </div>
    </>
  );
};
export default Scanner;
