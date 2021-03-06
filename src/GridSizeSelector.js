import React from 'react';
import styled from 'styled-components';
import { Heading } from './Primitives';

const GridOptionLabel = styled.label.attrs({
  className:
    'db w3 h3-l pa2 pa3-l ba f6 fw4 lh-solid sans-serif flex items-center justify-center',
})`
  color: #262626;
  border-color: #ccc;
  border-style: solid;
  border-width: 2px;
`;

const GridOptionInput = styled.input.attrs({
  type: 'radio',
  name: 'grid-size',
  className: 'clip',
})`
  &:checked:focus + ${GridOptionLabel}, &:checked:active + ${GridOptionLabel} {
    border-color: #2761d4;
  }

  &:checked + ${GridOptionLabel} {
    border-color: #000;
  }

  &:focus + ${GridOptionLabel}, &:active + ${GridOptionLabel} {
    border-color: #2761d4;
  }
`;

const GridOption = ({ size, value, onChange, className }) => (
  <div>
    <GridOptionInput
      id={`${size}x${size}`}
      checked={value === size}
      onChange={() => onChange(size)}
      value={size}
    />
    <GridOptionLabel
      className={className}
      htmlFor={`${size}x${size}`}
    >{`${size}x${size}`}</GridOptionLabel>
  </div>
);

export const GridSizeSelector = ({ value, onChange, className }) => (
  <fieldset className={`db bn pa0 ma0 sans-serif bg-white ${className}`}>
    <Heading as="legend" className="f4 b mb2">
      Grid Size
    </Heading>

    <div className="flex flex-wrap space-between nt2 nl2">
      <GridOption className="ma2" size={6} value={value} onChange={onChange} />
      <GridOption className="ma2" size={9} value={value} onChange={onChange} />
      <GridOption className="ma2" size={12} value={value} onChange={onChange} />
    </div>
  </fieldset>
);
