import React from 'react';

const Result = props => {
    const result = props.result;

    console.log(result);

    if (!result) {
        return null;
    }

    if (!result.success) {
        return <div> {result.data} </div>;
    } else {
        return <div> ISBN: {result.codeResult.code} </div>;
    }
};

export default Result;
