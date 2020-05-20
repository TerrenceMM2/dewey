import React, { useRef } from 'react';
import Quagga from 'quagga';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        border: 'none'
    }
});

const Scanner = props => {
    const classes = useStyles();
    const fileInput = useRef(null);

    const handleChange = () => {
        const file = URL.createObjectURL(fileInput.current.files[0]);

        Quagga.decodeSingle(
            {
                decoder: {
                    readers: ['ean_reader']
                },
                facingMode: 'environment',
                locate: true,
                src: file
            },
            function (result) {
                console.log(result);

                if (result.codeResult) {
                    props.handleDetected({
                        success: true,
                        ...result
                    });
                } else {
                    props.handleDetected({
                        success: false,
                        data: 'Not detected.'
                    });
                }
            }
        );
    };

    return (
        <fieldset className={classes.wrapper}>
            <input
                type="file"
                accept="image/*"
                capture="camera"
                ref={fileInput}
                onChange={handleChange}
                className={classes.input}
            />
        </fieldset>
    );
};
export default Scanner;
