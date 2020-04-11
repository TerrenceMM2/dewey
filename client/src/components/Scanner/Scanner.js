import React, { useEffect, useRef } from 'react';
import Quagga from 'quagga';
import test from './test.jpg';

const Scanner = (props) => {
  const fileInput = useRef(null);

  const handleChange = (e) => {
    const file = URL.createObjectURL(fileInput.current.files[0]);

    Quagga.decodeSingle(
      {
        decoder: {
          readers: ['ean_reader'], // List of active readers
        },
        locate: true, // try to locate the barcode in the image
        // You can set the path to the image in your server
        // or using it's base64 data URI representation data:image/jpg;base64, + data
        src: file,
      },
      function (result) {
        console.log(result);

        if (result.codeResult) {
          props.handleDetected(result);

          console.log('result', result.codeResult.code);
        } else {
          console.log('not detected');
        }
      }
    );
  };

  return (
    <fieldset class="input-group">
      <input
        type="file"
        accept="image/*"
        capture="camera"
        ref={fileInput}
        onChange={handleChange}
      />
      <button>Rerun</button>
    </fieldset>
  );
  {
    /* <div id="interactive" className="viewport" />; */
  }
};
export default Scanner;
