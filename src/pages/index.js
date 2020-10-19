import React from 'react';
import styled from 'styled-components';

import Layout from 'src/global/Layout';
import { GatsbyTech } from 'src/assets/svgs';
import MHGLogo from 'src/assets/images/mhg-logo.png';

const LandingPage = () => (
  <Layout>
    <Page>
      <h1>Mad Hatter</h1>
      <p>Gaming</p>
      <img src={MHGLogo} height={200} width={200} />
    </Page>
  </Layout>
);

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    color: #555;
    margin-top: 60px;
  }

  p {
    font-size: 14px;
    color: #aaa;
    margin-top: 12px;
    letter-spacing: 10px;
    text-transform: uppercase;
  }

  svg {
    margin-top: 80px;
  }
`;

export default LandingPage;
