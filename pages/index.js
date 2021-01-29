import styled from 'styled-components'
import db from '../db.json'
import Head from 'next/head'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

// const QuizBackground = styled.div`
//   background-image: url(${db.bg});
//   background-size: 'cover';
//   flex: 1;
//   background-position: 'center'
// `

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* colocar favicon depois */}
        {/* https://metatags.io/ */}
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizzes da Galera</h1>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mitestainer/aluraquiz-base" />
    </QuizBackground>
  )
}
