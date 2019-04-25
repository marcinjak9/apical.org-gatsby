import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeHero from "../Wrappers/HomeHero"
import RestartingTypist from '../components/TypistLoop';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main>
          <HomeHero
        title={(
          <>
            Organizza e vendi online
            <RestartingTypist
              words={[
                'i tuoi viaggi',
                'le tue esperienze',
                'i tuoi festival',
                'i tuoi retreats',
              ]}
            />
          </>
)}
        image="https://source.unsplash.com/collection/4497907/1920x1080"
        body={`**Sei un tour operator, un'associazione o un singolo travel planner?**
          Apical è la piattaforma digitale per te.
          Professionale, adattabile, integrabile con il tuo sito e senza costi fissi`}
        bodyLight
        cta={{
          text: 'Iscriviti ad Apical gratuitamente',
          link: '#onboarding',
        }}
      />
    </main>
  </Layout>
)

export default IndexPage
