import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { Row, Column } from '../components/Global';

const VideoSection = props => (
  <SectionContainer {...props}>
    <Row>
      <Column size={8} offset={3}>
        <iframe
          title="Apical Video"
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/zLvyl6-s5Tw"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          color="#00f"
          controls="0"
          showinfo="0"
          modestbranding="1"
          rel="0"
        />
      </Column>
    </Row>
  </SectionContainer>
);

export default VideoSection;
