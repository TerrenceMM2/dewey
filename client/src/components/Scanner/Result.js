import React, { Component } from 'react';

const Result = (props) => {
  const result = props.result;

  if (!result) {
    return null;
  }

  return <div> ISBN:{result} </div>;
};

export default Result;
