import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';


import Layout from 'components/layout';
import Banner from 'sections/banner';
import Boost from 'sections/boost'
import VideoOne from 'sections/Video';
import Feature from 'sections/features';
import Support from 'sections/support';
import CallToAction from 'sections/call-to-action';



export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Banner />
        <Feature />
        <Boost />
        <VideoOne />
        <Support />
        <CallToAction />
      </Layout>
    </ThemeProvider>
  );
}
