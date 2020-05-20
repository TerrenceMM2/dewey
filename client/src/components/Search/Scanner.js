import React, { useRef } from 'react';
import Quagga from 'quagga';
import { createUseStyles } from 'react-jss';
import { colors } from '../constants';

import { BrowserBarcodeReader } from '@zxing/library';

const useStyles = createUseStyles({
    wrapper: {
        position: 'absolute',
        overflow: 'hidden',
        display: 'inline-block',
        border: 'none',
        right: 10,
        bottom: 10
    },
    btn: {
        width: 56,
        height: 56,
        color: 'white',
        borderRadius: '50%',
        backgroundColor: colors.PRIMARY,
        border: 'none',
        boxSizing: 'border-box'
    },
    input: {
        fontSize: 100,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0,
        cursor: 'pointer'
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
            <button className={classes.btn}>
                <span className="material-icons">camera_alt</span>
            </button>

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
