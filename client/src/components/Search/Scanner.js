import React, { useRef } from 'react';
import Quagga from 'quagga';
import { createUseStyles } from 'react-jss';
import { Button } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const useStyles = createUseStyles({
    wrapper: {
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-block'
    },
    button: {
        boxShadow: 'none !important',
        width: 150
    },
    input: {
        fontSize: '100px',
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0
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
        <div className={classes.wrapper}>
            <Button className={classes.button}>
                <CameraAltIcon />
            </Button>
            <input
                type="file"
                accept="image/*"
                capture="camera"
                ref={fileInput}
                onChange={handleChange}
                className={classes.input}
            />
        </div>
    );
};
export default Scanner;
