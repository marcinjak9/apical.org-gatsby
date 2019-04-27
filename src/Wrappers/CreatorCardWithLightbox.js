import React from 'react'
import Modal from 'react-modal'
import CreatorCardModal from '../components/CreatorCardModal'
import CreatorCard from '../components/CreatorCard'

Modal.setAppElement('#___gatsby')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    background: 'transparent',
    border: 'none',
  },
}

export default class CreatorCardWithLightBox extends React.Component {
  state = {
    modalIsOpen: false,
  }

  openModal = (e) => {
    e.preventDefault()
    this.setState({ modalIsOpen: true })
  }

  render() {
    const {
      image, name, body, tag, url, cta, excerpt, tagline,
    } = this.props
    const { modalIsOpen } = this.state
    return (
      <>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={() => this.setState({ modalIsOpen: false })}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <CreatorCardModal
            closeModal={() => this.setState({ modalIsOpen: false })}
            tag={tag}
            title={name}
            body={body}
            url={url}
            image={image}
            tagline={tagline}
          />
        </Modal>
        <CreatorCard
          image={image}
          name={name}
          tag={tag}
          cta={cta}
          excerpt={excerpt}
          onPlusClick={this.openModal}
        />
      </>
    )
  }
}
