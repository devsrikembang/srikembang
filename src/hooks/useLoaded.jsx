import * as React from 'react';
import usePreload from './usePreload';

export default function useLoaded() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const preloaded = usePreload();
  React.useEffect(() => {
    if (preloaded) {
      setIsLoaded(true);
    } else {
      setTimeout(() => {
        setIsLoaded(true);
      }, 200);
    }

    return () => setIsLoaded(false);
  }, [preloaded]);
  return isLoaded;
}
