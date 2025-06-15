'use client';
import React from 'react';
import { QrReader } from 'react-qr-reader';

type QrScannerProps = {
  onScan: (result: string) => void;
  onError: (error: Error) => void;
};

export default function QrScanner({ onScan, onError }: QrScannerProps) {
  return (
    <div className='flex justify-center items-center p-4 border rounded-md shadow-md'>
      <h2>Scan QR Code</h2>
      <QrReader
        on-result={(result, error) => {
          if (error) {
            console.error(error);
            onError(error);
            return;
          }
          if (result) {
            console.log(result.text);
            onScan(result.text);
          }
        }}
        constraints={{ facingMode: 'environment' }}
        containerStyle={{ width: '300px', height: '300px' }}
      />
    </div>
  );
}
