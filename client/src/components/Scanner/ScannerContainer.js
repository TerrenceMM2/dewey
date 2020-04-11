import React, { useState } from 'react';
import Scanner from './Scanner';
import Result from './Result';

const ScannerApp = () => {
  const [results, setResults] = useState('');

  const handleDetected = (result) => {
    setResults(result.codeResult.code);
  };

  return (
    <div>
      {/* <button onClick={scan}>{scanning ? 'Stop' : 'Scan Barcode'}</button> */}

      <ul className="results">
        <Result key={results} result={results} />
      </ul>

      <Scanner handleDetected={handleDetected} />
    </div>
  );
};

export default ScannerApp;
