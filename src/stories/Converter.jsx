import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as convert from 'convert-units';
import { Input, Select } from './Components';

export const Converter = ({measure}) => {
  const possibilities = convert().possibilities(measure).map((unit) => {
      const descr = convert().describe(unit);
      return {
          value: descr.abbr,
          description: `${descr.singular} (${descr.abbr})`
      };
  });

  const [fromUnit, setFromUnit] = useState(possibilities[0].value);
  const [toUnit, setToUnit] = useState(possibilities[0].value);
  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(convert(1).from(fromUnit).to(toUnit));

  const updateFromUnit = (event) => {
    setFromUnit(() => event.target.value);
    setToValue(() => convert(fromValue).from(event.target.value).to(toUnit));
  };

  const updateToUnit = (event) => {
    setToUnit(() => event.target.value);
    setToValue(() => convert(fromValue).from(fromUnit).to(event.target.value));
  };

  const updateValue = (event) => {
    setFromValue(() => event.target.value);
    setToValue(() => convert(event.target.value).from(fromUnit).to(toUnit));
  };
  
  return <div className="converter">
      <Select label="From:" options={possibilities} onChange={updateFromUnit}></Select>
      <Select label="To:" options={possibilities} onChange={updateToUnit}></Select>
      <Input label="Value:" type="floating-point" onChange={updateValue}></Input>
      <p>{fromValue} {fromUnit} = {toValue} {toUnit}</p>
  </div>
};

Converter.propTypes = {
  measure: PropTypes.string.isRequired
};

Input.defaultProps = {
  measure: 'length'
};