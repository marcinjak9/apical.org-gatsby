import React, { Component } from 'react'
import Modal from 'react-modal'
import Select, { components } from 'react-select'

import SectionContainer from '../components/SectionContainer'

Modal.setAppElement('#___gatsby')

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <i className="icon-drop_down" />
  </components.DropdownIndicator>
)

// const customStyles = {
//   content: {
//     position: 'relative',
//     top: 'inherit',
//     bottom: 'inherit',
//     left: 'inherit',
//     right: 'inherit',
//     padding: 0,
//     margin: 0,
//     border: 'none',
//     display: 'flex',
//     flex: 1,
//   },
//   overlay: {
//     display: 'flex',
//   },
// };
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export default class SignUpModalComponent extends Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption })
  }

  render() {
    const { toggleModal } = this.props
    const { selectedOption } = this.state
    return (
      <div className="signup-modal">
        <SectionContainer
          title=" We’d like to ask you few questions in order to provide you with
              the best solution for your Experience"
          titleCenter
          padded
        />

        <SectionContainer greyBg resetParagraph>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Sign Up</h2>
                <p>
                  Open an account for free. Design an Experience. Go live today
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="First name"
                      className="simple-line"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="simple-line form-inline"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      placeholder="Email"
                      className="simple-line form-inline"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="simple-line form-inline"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="dropdown-wrapper">
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    classNamePrefix="dropdown"
                    components={{ DropdownIndicator }}
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="button" onClick={toggleModal}>
            Close
          </button>
        </SectionContainer>
      </div>
    )
  }
}
