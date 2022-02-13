import * as React from 'react';

const PreloadContext = React.createContext(false);

function PreloadProvider({ children }) {
  const [preloaded, setPreloaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setPreloaded(true);
    }, 200);

    return () => setPreloaded(false);
  }, []);

  return (
    <PreloadContext.Provider value={preloaded}>
      {children}
    </PreloadContext.Provider>
  );
}

export { PreloadContext, PreloadProvider };
