import React, { useState } from 'react';
import Scanner from './Scanner';
import Result from './Result';

const ScannerApp = () => {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState('');

  const scan = () => setScanning(!scanning);

  const handleDetected = (result) => {
    setScanning(!scanning);
    console.log(result);
    console.log('Format: ', result.codeResult.format);
    console.log('Barcode: ', result.codeResult.code);

    setResults(result.codeResult.code);
  };

  return (
    <div>
      <button onClick={scan}>{scanning ? 'Stop' : 'Scan Barcode'}</button>
      <ul className="results">
        <Result key={results} result={results} />
      </ul>

      {scanning ? <Scanner handleDetected={handleDetected} /> : null}
    </div>
  );
};

export default ScannerApp;
