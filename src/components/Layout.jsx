import * as React from 'react';
import { Header, Footer } from '.';
import { PreloadProvider } from '../context/PreloadContext';

export default function Default({ children }) {
  return (
    <>
      <Header />
      <PreloadProvider>{children}</PreloadProvider>
      <Footer />
    </>
  );
}
