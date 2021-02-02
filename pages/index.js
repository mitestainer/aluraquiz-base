import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Link from '../src/components/Link';

// const QuizBackground = styled.div`
//   background-image: url(${db.bg});
//   background-size: 'cover';
//   flex: 1;
//   background-position: 'center'
// `

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ duration: 0.5, delay: 0 }}
          variants={
            { show: { opacity: 1, y: '0' }, hidden: { opacity: 0, y: '100%' } }
          }
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input name="nomeDoUsuario" placeholder="Diz aí seu nome" onChange={(e) => setName(e.target.value)} value={name} />
              <Button type="submit" disabled={!name}>
                {!name ? '...' : `Vamos jogar, ${name}!`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={{ show: { opacity: 1 }, hidden: { opacity: 0 } }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Quizzes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, user] = linkExterno.replace(/\//g, '').replace('https:', '').replace('.vercel.app', '').split('.');
                return (
                  <li key={linkExterno}>
                    <Widget.Topic as={Link} href={`/quiz/${projectName}___${user}`}>{`${user}/${projectName}`}</Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={{ show: { opacity: 1 }, hidden: { opacity: 0 } }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mitestainer/aluraquiz-base" />
    </QuizBackground>
  );
}
