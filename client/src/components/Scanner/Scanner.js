import React, { useRef } from 'react';
import Quagga from 'quagga';

const Scanner = props => {
    const fileInput = useRef(null);

    const handleChange = () => {
        const file = URL.createObjectURL(fileInput.current.files[0]);

        Quagga.decodeSingle(
            {
                decoder: {
                    readers: ['ean_reader']
                },
                locate: true,
                src: file
            },
            result => {
                if (result.codeResult) {
                    props.handleDetected(result);
                } else {
                    props.handleDetected('not detected');
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
};
export default Scanner;
