import React from 'react'
import Head from 'next/head'
import styled, { injectGlobal } from 'styled-components'
import { space } from 'styled-system'
import styledNormalize from 'styled-normalize'

injectGlobal`
  ${styledNormalize}
  body {
    line-height: 1.5;
  }
`

const Section = styled.section`
  ${space};
`

// html {
//   box-sizing: border-box;
//   overflow-wrap: break-word;
//   margin: 0;
// }
// *,
// *::before,
// *::after {
//   box-sizing: inherit;
//   overflow-wrap: break-word;
//   margin: 0;
// }

const systemFonts = `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';`

const Container = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  padding: 2rem;
  max-width: 600px;
`

const Name = styled.h1`
  ${systemFonts};
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  color: #323336;
`

const Title = styled.p`
  ${systemFonts};
  font-weight: 300;
  color: #323336;
  margin-bottom: 0.5rem;
`

const Text = styled.p`
  ${systemFonts};
  ${space};
  font-weight: 300;
  color: #323336;
`

const SubText = styled.p`
  ${systemFonts};
  ${space};
  font-weight: 300;
  color: #96999b;
`

const Category = styled.h2`
  ${systemFonts};
  ${space};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #c9cccf;
`

const SubTitle = styled.h3`
  ${systemFonts};
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #323336;
  margin-bottom: 0.5rem;
`

const Ul = styled.ul`
  padding: 0;
`

const Li = styled.li`
  list-style: none;
  margin-bottom: 1rem;
`

const Highlights = styled.ul`
  list-style: disc;
`

const SkillContainer = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
`

const Skill = styled.li`
  list-style: none;
  padding: 5px 18px;
  background-color: #f1f5f7;
  margin-right: 3px;
  margin-bottom: 12px;
  ${systemFonts};
  font-size: 14px;
  font-weight: 300;
`

export default () => (
  <Container>
    <Head>
      <title>Deam Hansen</title>
    </Head>
    <header>
      <Name>Deam Hansen</Name>
    </header>
    <Section mb="1rem">
      <Title>Full Stack Developer</Title>
      <SubText mb="0.5rem">Odense, Denmark</SubText>
      <SubText>
        I'm a self-taught web developer, highly motivated individual, with 4
        years of experience. I have a passion for web development, design and
        new web technologies. Currently contributing to the Open Source
        community and also building Ethereum DApps.
      </SubText>
    </Section>
    <Section mb="1rem">
      <Category mb="1rem">Social</Category>
      <SkillContainer>
        <Skill>Email</Skill>
        <Skill>LinkedIn</Skill>
        <Skill>Github</Skill>
        <Skill>Twitter</Skill>
        <Skill>Medium</Skill>
      </SkillContainer>
    </Section>
    <Section mb="2rem">
      <Category mb="1rem">Skills</Category>
      <SkillContainer>
        <Skill>Danish</Skill>
        <Skill>English</Skill>
        <Skill>Javascript</Skill>
        <Skill>Typescript</Skill>
        <Skill>Node.JS</Skill>
        <Skill>React</Skill>
        <Skill>React Native</Skill>
        <Skill>Redux</Skill>
        <Skill>Next.js</Skill>
        <Skill>Webpack</Skill>
        <Skill>GraphQL</Skill>
        <Skill>Amazon Web Services</Skill>
        <Skill>Solidity</Skill>
        <Skill>Docker</Skill>
        <Skill>Firebase</Skill>
        <Skill>Git</Skill>
        <Skill>Continuous Integration</Skill>
        <Skill>Testing</Skill>
        <Skill>Styled-components</Skill>
        <Skill>Styled-system</Skill>
      </SkillContainer>
    </Section>
    <Section mb="3rem">
      <Category mb="1rem">Work Experience</Category>
      <Ul>
        <Li>
          <SubTitle>EthSignals</SubTitle>
          <SubText>Full Stack Developer | July, 2018 – Current</SubText>
        </Li>
        <Li>
          <SubTitle>Aragon Planning Suite</SubTitle>
          <SubText>Frontend Developer | June, 2018 – Current</SubText>
        </Li>
        <Li>
          <SubTitle>Giveth</SubTitle>
          <SubText>Full Stack Developer | Mar, 2018 – Current</SubText>
          <Text mb=".5rem">Giveth is a non-profit org...</Text>
          <Highlights>
            <li>
              <Text>Donation Leaderboard</Text>
            </li>
            <li>
              <Text>Wall of Fame</Text>
            </li>
            <li>
              <Text>Giveth Riot Bot</Text>
            </li>
            <li>
              <Text>Giveth DApp</Text>
            </li>
          </Highlights>
        </Li>
        <Li>
          <SubTitle>Peergrade</SubTitle>
          <SubText>Full Stack Developer | Sep, 2017 – Dec, 2017</SubText>
        </Li>
      </Ul>
    </Section>
    <Section mb="3rem">
      <Category mb="1rem">Open Source</Category>
      <Ul>
        <Li>
          <SubTitle>Laco</SubTitle>
          <SubText>Lightweight state management for React and Inferno </SubText>
        </Li>
        <Li>
          <SubTitle>Typescript transformers</SubTitle>
          <SubText>Various transpilation targets</SubText>
        </Li>
        <Li>
          <SubTitle>Shader Archive</SubTitle>
          <SubText>GLSL fragment shader experiments</SubText>
        </Li>
      </Ul>
    </Section>
    <Section mb="3rem">
      <Category mb="1rem">Education</Category>
      <Ul>
        <Li>
          <SubTitle>Odense Tekniske Gymnasium</SubTitle>
          <SubText>August, 2015 – July, 2017</SubText>
        </Li>
      </Ul>
    </Section>
  </Container>
)
