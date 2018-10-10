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
  html {
    box-sizing: border-box;
    overflow-wrap: break-word;
    margin: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    overflow-wrap: break-word;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
`

const Section = styled.section`
  ${space};
`

const Container = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  padding: 2rem;
  max-width: 600px;
`

const Name = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  color: #323336;
`

const Title = styled.p`
  font-weight: 300;
  color: #323336;
  margin-bottom: 0.5rem;
`

const Text = styled.p`
  ${space};
  font-weight: 300;
  color: #323336;
`

const SubText = styled.p`
  ${space};
  font-weight: 300;
  color: #96999b;
`

const Category = styled.h2`
  ${space};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #c9cccf;
`

const SubTitle = styled.h3`
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
  font-size: 14px;
  font-weight: 300;
`

const Link = styled.a`
  transition: box-shadow 160ms ease 0s;
  box-shadow: rgb(238, 251, 255) 0px -9px 0px inset;
  border-bottom: 2px solid rgb(207, 243, 255);
  text-decoration: none;
  color: #323336;
  &:hover {
    box-shadow: rgb(207, 243, 255) 0px -1.2em 0px inset;
  }
`

export default () => (
  <Container>
    <Head>
      <title>Deam</title>
    </Head>
    <header>
      <Name>Deam Hansen</Name>
    </header>
    <Section mb="1rem">
      <Title>Full-Stack Developer</Title>
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
        <Skill>
          <Link href="https://www.linkedin.com/in/deam-hansen-0723b4127/">
            LinkedIn
          </Link>
        </Skill>
        <Skill>
          <Link href="https://github.com/deamme">Github</Link>
        </Skill>
        <Skill>
          <Link href="https://twitter.com/deamlabs">Twitter</Link>
        </Skill>
        <Skill>
          <Link href="https://medium.com/@Deam">Medium</Link>
        </Skill>
      </SkillContainer>
    </Section>
    <Section mb="2rem">
      <Category mb="1rem">Skills</Category>
      <SkillContainer>
        <Skill>Danish</Skill>
        <Skill>English</Skill>
        <Skill>Javascript</Skill>
        <Skill>Typescript</Skill>
        <Skill>Node.js</Skill>
        <Skill>React.js</Skill>
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
        <Skill>Figma</Skill>
      </SkillContainer>
    </Section>
    <Section mb="3rem">
      <Category mb="1rem">Work Experience</Category>
      <Ul>
        <Li>
          <SubTitle>
            <Link href="https://giveth.io/">Giveth</Link>
          </SubTitle>
          <SubText>Full Stack Developer | Mar, 2018 – Current</SubText>
          <Text mb=".5rem">
            Giveth is a non-profit organisation in the Ethereum space that is
            trying to build a transparent donation platform for Decentralized
            Altruistic Communities. I've been contributing to the projects
            listed below.
          </Text>
          <Highlights>
            <li>
              <Text>
                <Link href="https://github.com/Giveth/wall-of-fame">
                  Wall of Fame
                </Link>{' '}
                - I contributed to the initial version but then later rewrote
                everything from scratch using React, Next.js, styled-components
                and Firebase. It now uses MetaMask to authenticate users and is
                live <Link href="https://fame.giveth.io/">here</Link>.
              </Text>
            </li>
            <li>
              <Text>
                <Link href="https://github.com/Giveth/giveth-bot">
                  Giveth Riot Bot
                </Link>{' '}
                - I created this Matrix/Riot bot which is written in Javascript.
                The bot acted as a point system in the first iteration but
                expanded to be a chatbot aswell.
              </Text>
            </li>
            <li>
              <Text>
                <Link href="https://github.com/Giveth/giveth-dapp">
                  Giveth DApp
                </Link>{' '}
                - This is Giveth's main application. I've been contributing to
                the frontend part which is written in React.
              </Text>
            </li>
          </Highlights>
        </Li>
        <Li>
          <SubTitle>
            <Link href="https://github.com/Giveth/planning-app">
              Aragon Planning Suite
            </Link>
          </SubTitle>
          <SubText>Frontend Developer | June, 2018 – Oct, 2018</SubText>
          <Text>
            "A suite of aragonOS apps that includes allocation, range voting,
            issue curation, and other planning tools so DAOs can collectively
            budget and design custom reward & bounty systems." - This project is
            a collaboration between people from Giveth and Space Decentral.
          </Text>
        </Li>
        <Li>
          <SubTitle>
            <Link href="https://github.com/Giveth/ethereum-signal-aggregator">
              EthSignals
            </Link>
          </SubTitle>
          <SubText>Full Stack Developer | July, 2018 – Oct, 2018</SubText>
          <Text>
            A website that curates signals which can be used to get an overview
            of the overall Ethereum community and its health. I've written
            everything from scratch using React, styled-components and Next.js.
          </Text>
        </Li>
        <Li>
          <SubTitle>
            <Link href="https://www.peergrade.io/">Peergrade</Link>
          </SubTitle>
          <SubText>Full Stack Developer | Sep, 2017 – Dec, 2017</SubText>
          <Text>- David Kofoed Wind (CEO of Peergrade)</Text>
          <Text>
            "I worked with Deam at Peergrade where he was a full-stack developer
            working as part of our product team. Deam worked on introducing a
            range of new features into our React-based app, both in the back-end
            and in the front-end. He worked as a part of a team and participated
            in defining and developing features, testing, optimizing and
            refactoring. Deam was easy to communicate with, a fast and efficient
            learner and overall a very talented developer."
          </Text>
        </Li>
      </Ul>
    </Section>
    <Section mb="3rem">
      <Category mb="1rem">Open Source</Category>
      <Text mb="1rem">
        Everything I've done the past year has been Open Source. Please check
        out my <Link href="https://github.com/deamme">Github profile</Link>.
        Listed below are just some of my personal projects that has been starred
        by people from Facebook, Google, Yahoo, Alibaba, Dropbox, IBM etc.
      </Text>
      <Ul>
        <Li>
          <SubTitle>
            <Link href="https://github.com/deamme/laco">Laco</Link>
          </SubTitle>
          <SubText>Lightweight state management for React and Inferno </SubText>
          <Text>
            This project is one of my proudest and also reaches around 100 stars
            on Github. It's an alternative to Redux and provides a very simple
            interface for React state management. I've written an{' '}
            <Link href="https://medium.com/@Deam/laco-intro-5db2077ec829">
              introductory blog post
            </Link>{' '}
            about how it works but check out its{' '}
            <Link href="https://github.com/deamme/laco">Github page</Link> for
            more.
          </Text>
        </Li>
        <Li>
          <SubTitle>Typescript transformers</SubTitle>
          <SubText>Various transpilation targets</SubText>
          <Highlights>
            <li>
              <Text>
                <Link href="https://github.com/deamme/ts-transform-inferno">
                  ts-transform-inferno
                </Link>{' '}
                - This transformer transpiles JSX to Inferno compatible code.
                Sort of like how the Babel React presets transpiles from JSX to
                React code. Check out its{' '}
                <Link href="https://github.com/deamme/ts-transform-inferno">
                  Github page
                </Link>{' '}
                for more.
              </Text>
            </li>
            <li>
              <Text>
                <Link href="https://github.com/deamme/ts-transform-css-modules-next">
                  ts-transform-css-modules-next
                </Link>{' '}
                - This transformer transpiles JSX styleName prop to
                corresponding atomic CSS classes in className prop. Check out
                the{' '}
                <Link href="https://medium.com/@Deam/css-modules-next-intro-a4ab14fe572f">
                  introductory blog post
                </Link>{' '}
                and its{' '}
                <Link href="https://github.com/deamme/ts-transform-css-modules-next">
                  Github page
                </Link>{' '}
                for more.
              </Text>
            </li>
          </Highlights>
        </Li>
      </Ul>
    </Section>
    <Section mb="3rem">
      <Category mb="1rem">Education</Category>
      <Ul>
        <Li>
          <SubTitle>Odense Tekniske Gymnasium</SubTitle>
          <SubText>August, 2015 – July, 2017</SubText>
          <Text>
            The education system in Denmark is different than in the US. What
            you call “Gymnasium” in Denmark corresponds to first year in
            college. There are different kinds of “Gymnasium” and the one I went
            to is heavy on Science and Technology. My main classes were
            Communication/IT and English.
          </Text>
        </Li>
      </Ul>
    </Section>
  </Container>
)
