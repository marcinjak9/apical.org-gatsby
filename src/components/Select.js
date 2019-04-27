import React from 'react'
import styled from '@emotion/styled'

const SelectWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 2rem;
  margin-bottom: 2rem;
  label {
    position: absolute;
    top: -5px;
    left: 0;
    -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    font-size: var(--font-caption);
    font-weight: bold;
    color: var(--text-grey);
    text-transform: uppercase;
    opacity: ${props => (props.value ? 1 : 0)};
  }

  .line {
    color: rgba(0, 0, 0, 0.87);
    cursor: text;
    width: 100%;
    display: inline-flex;
    font-size: 1rem;
    line-height: 1.1875em;
    align-items: center;

    &:before {
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      position: absolute;
      transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-bottom: 1px solid var(--border-grey);
      pointer-events: none;
    }
  }

  .inner-wrapper {
    width: 100%;
    height: 50px;
    position: relative;
  }

  select {
    width: calc(100% - 32px);
    height: 100%;
    cursor: pointer;
    min-width: 16px;
    user-select: none;
    padding-right: 32px;
    border-radius: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 100%;
    border: 0;
    margin: 0;
    display: block;
    box-sizing: content-box;
    background: none;
    -webkit-tap-highlight-color: transparent;
    color: ${props => (!props.value ? 'var(--text-grey)' : 'var(--text-black)')};

    &:focus {
      outline: none;
    }
  }

  span.arrow {
    &:after {
      content: "";
      border-color: var(--text-grey) transparent transparent transparent;
      border-style: solid;
      border-width: 10px 6px 0 6px;
      height: 0px;
      width: 0px;
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      pointer-events: none;
    }
  }
`

const Select = (props) => {
  const {
    options, onSelectChange, value = null, placeholder, required,
  } = props
  return (
    <SelectWrapper value={value}>
      <label htmlFor="type">
        {`${placeholder} - ${required ? '' : 'opzionale'}`}
      </label>
      <div className="line">
        <div className="inner-wrapper">
          <select
            name="type"
            id="type"
            value={value || 'default'}
            onChange={({ target }) => onSelectChange(target.value)}
          >
            <option value="default" disabled>
              {`${placeholder} - ${required ? '' : 'opzionale'}`}
            </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="arrow" />
        </div>
      </div>
    </SelectWrapper>
  )
}

export default Select
