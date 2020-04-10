import React, { useEffect } from 'react';
import Quagga from 'quagga';

const Scanner = (props) => {
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 640,
            height: 480,
            facing: 'environment',
          },
        },
        locator: {
          patchSize: 'medium',
          halfSample: true,
        },
        numOfWorkers: 2,
        decoder: {
          readers: ['ean_reader'],
        },
        locate: true,
      },
      (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('Initialization finished. Ready to start scanning.');
        Quagga.start();
      }
    );
    Quagga.onDetected(_onDetected);
  });

  //   componentWillUnmount() {
  //     Quagga.offDetected(this._onDetected);
  //   }

  const _onDetected = (result) => {
    Quagga.stop();
    props.handleDetected(result);
  };

  return <div id="interactive" className="viewport" />;
};

export default Scanner;
