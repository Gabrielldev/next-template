import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/home.styles';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Home</h1>
    </Container>
  );
};
