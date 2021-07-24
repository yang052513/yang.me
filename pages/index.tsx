import React from 'react'
import { Spacer } from 'components/atoms/Spacer'
import { HomeHero } from 'components/templates/Home/HomeHero'
import { HomeAbout } from 'components/templates/Home/HomeAbout'
import { HomeSkill } from 'components/templates/Home/HomeSkill'
import { HomeExperience } from 'components/templates/Home/HomeExperience'
import { HomeContact } from 'components/templates/Home/HomeContact'
import { HomePortfolio } from 'components/templates/Home/HomePortfolio'
import { HomeBlog } from 'components/templates/Home/HomeBlog'
import { Page } from 'components/atoms/Layout/Page'

const homeComponents = [
  <HomeAbout />,
  <HomeSkill />,
  <HomeExperience />,
  <HomePortfolio />,
  <HomeBlog />,
  <HomeContact />
]

const components = homeComponents.map((c, index) => (
  <React.Fragment key={index}>
    {c}
    {/* Mobile disable or decrease verticalSpace */}
    <Spacer verticalSpace="200px" />
  </React.Fragment>
))

const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <Page>{components}</Page>
    </>
  )
}

export default Home
