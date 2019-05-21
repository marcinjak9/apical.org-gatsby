import React from 'react'
import SectionContainer from '../components/SectionContainer'
import { Row, Column } from '../components/Global'

const VideoSection = (props) => {
  const { videoUrl } = props
  return (
    <SectionContainer {...props}>
      <Row>
        <Column size={12}>
          <iframe
            title="Apical Video"
            width="100%"
            height="500"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            color="#00f"
            controls="0"
            showinfo="0"
            modestbranding="0"
            rel="0"
          />
        </Column>
      </Row>
    </SectionContainer>
  )
}

export default VideoSection
