import * as React from 'react';
import { Header, Footer } from '.';
import { PreloadProvider } from '../context/PreloadContext';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-220935738-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function Default({ children }) {
  return (
    <>
      <Header />
      <PreloadProvider>{children}</PreloadProvider>
      <Footer />
    </>
  );
}
