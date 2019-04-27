import React from 'react'
import styled from '@emotion/styled'

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
  margin-top: 1rem;
  label {
    position: absolute;
    top: -5px;
    left: 0;
    opacity: ${props => (props.typing ? 1 : 0)};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    font-size: var(--font-caption);
    font-weight: bold;
    color: ${props => (props.error ? 'red' : 'var(--text-grey)')};
    text-transform: uppercase;
  }

  input {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 1.5rem 0 1.5rem 0;
    font-size: var(--font-body);
    font-weight: normal;
    line-height: 1.5;
    background-color: transparent;
    background-clip: padding-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border: 0;
    border-bottom: 1px solid
      ${props => (props.error ? 'red' : 'var(--border-grey)')};

    &:focus {
      outline: 0;
      box-shadow: none;
      border-bottom: 1px solid var(--darkblue);
    }
  }
`

const Input = ({
  onChange,
  value,
  label,
  placeholder,
  type,
  required,
  error,
}) => {
  const id = label.trim().replace(' ', '-')
  return (
    <InputContainer typing={!!value} error={error}>
      <label htmlFor={id}>{`${label}${required ? '' : ' - opzionale'}`}</label>
      <input
        name={id}
        id={id}
        onChange={({ target: { value: newVal } }) => onChange(newVal)}
        value={value}
        placeholder={`${placeholder}${required ? '' : ' - opzionale'}`}
        type={type}
      />
    </InputContainer>
  )
}

export default Input
