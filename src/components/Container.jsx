import * as React from 'react';

export default function Container({ children }) {
  return <div className="container mx-auto px-4 max-w-6xl">{children}</div>;
}
