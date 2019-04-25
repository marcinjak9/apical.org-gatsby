import React from 'react';
import SectionContainer from '../components/SectionContainer';
import TeamCard from '../components/TeamCard';
import { Row, Column } from '../components/Global';

const TeamSection = () => (
  <SectionContainer title="Conosci il team" titleCenter>
    <Row>
      <Column size="6">
        <TeamCard
          title="Nicola Zanola"
          subtitle="Co-founder – CEO Serial entrepreneur"
          body="35 years old, 10+ y. leading a tour operator and event company, graduated in management of the third sector organisations. Systemic Designer, Music producer"
          image="/static/images/team/nicola.jpeg"
        />
      </Column>
      <Column size="6">
        <TeamCard
          title="Fabio Daniele"
          subtitle="Co-founder – CTO Architect and backend dev"
          body="26 years old, 7+ y. experience in startups, agencies and enterprises. Senior Architect, Outdoor professional, Survivor Instructor"
          image="/static/images/team/fabio.jpeg"
        />
      </Column>
      <Column size="6">
        <TeamCard
          title="Marcin Jakubik"
          subtitle="Fronted Developer"
          body="24, Startup Enthusiast, Makers Evangelist, Entrepreneur of Myself and Digital Innovator. Nah I'm kidding, just copying and pasting from Stack Overflow"
          image="/static/images/team/marcin.jpg"
        />
      </Column>
      <Column size="6">
        <TeamCard
          title="Alessandro Sahebi"
          subtitle="Giornalista e Digital strategist"
          body='29 years old, freelance Journalist and Digital Strategist. Politic and environment lover. Pokemon favorite: Snorlax. "Stop complaining, plant a tree!"'
          image="/static/images/team/alessandro.jpeg"
        />
      </Column>
    </Row>
  </SectionContainer>
);

export default TeamSection;
