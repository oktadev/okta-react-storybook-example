import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Components.css';

export function Input({ size, type, label, name, placeholder, onChange }) {
  return (
    <label className={`input-component input-component--${size}`}>
      <span>{label}</span>
      <input
        type={type==='text' ? 'text' : 'number'}
        step={type==='floating-point' ? 'any' : undefined}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']),
  type: PropTypes.oneOf(['text', 'number', 'floating-point']),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  size: 'medium',
  type: 'text',
  label: 'Enter a value',
  name: 'input',
  placeholder: 'Please enter a value',
  onChange: undefined
};

export function Select({ size, label, options, onChange }) {
  return (
    <label className={`select-component select-component--${size}`}>
      <span>{label}</span>
      <select className="select-component" onChange={onChange}>
        {options.map((option) => <option value={option.value}>{option.description}</option>)}
      </select>
    </label>
  );
};

Select.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']),
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  size: 'medium',
  label: 'Options',
  options: []
};

export function Tabs({ children }) {
  const [active, setActive] = useState(0);

  const onTabClick = (newActive) => () => {
    setActive(() => newActive);
  };

  return (
    <div className="tabs-component">
      <div className="tabs-row">
        {children.map((child, index) => <div className={`tab ${index === active ? "active" : ""}`} onClick={onTabClick(index)}>{child.props.label}</div>)}
      </div>
      <div className="tabs-content">
        {children[active]}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

Tabs.defaultProps = {
  children: []
};