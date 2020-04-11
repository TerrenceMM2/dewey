import React, { useState } from 'react';
import Scanner from './Scanner';
import Result from './Result';

const ScannerApp = () => {
  const [results, setResults] = useState('');

  const handleDetected = (result) => {
    if (result.codeResult.code) {
      setResults(result.codeResult.code);
    } else {
      setResults(result);
    }
  };

  return (
    <div>
      <ul className="results">
        <Result key={results} result={results} />
      </ul>
      <Scanner handleDetected={handleDetected} />
    </div>
  );
};

export default ScannerApp;
