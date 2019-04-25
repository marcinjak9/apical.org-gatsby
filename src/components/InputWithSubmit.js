import React from 'react';
import styled from '@emotion/styled';

const InputContainer = styled.div`
  position: relative;

  input[type='text'] {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 1.5rem 5rem 1.5rem 0;
    font-size: var(--font-body);
    font-weight: normal;
    line-height: 1.5;
    background-color: transparent;
    background-clip: padding-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border: 0;
    border-bottom: 1px solid var(--border-grey);

    &:focus {
      outline: 0;
      box-shadow: none;
      border-bottom: 1px solid var(--darkblue);
    }
  }
  input[type='submit'] {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-weight: bold;
    font-size: var(--font-body);
    padding: 0;
    min-width: initial;
    color: var(--text-black);
    border: none;
    background: transparent;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Input = ({
  placeholder, value, onChange, submit,
}) => (
  <InputContainer>
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
    {submit && <input type="submit" value="Confirm" onClick={submit} />}
  </InputContainer>
);

export default Input;
