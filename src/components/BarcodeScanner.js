// src/components/BarcodeScanner.js
import React, { useEffect } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = () => {
    useEffect(() => {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector("#interactive")
            },
            decoder: {
                readers: ["code_128_reader"]
            }
        }, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            Quagga.start();
        });

        Quagga.onDetected((data) => {
            alert(`Barcode detected: ${data.codeResult.code}`);
        });

        return () => {
            Quagga.stop();
        };
    }, []);

    return <div id="interactive" style={{ width: '100%', height: '300px' }}></div>;
};

export default BarcodeScanner;