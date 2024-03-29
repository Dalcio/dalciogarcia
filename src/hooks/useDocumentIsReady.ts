import { useState, useEffect } from 'react';

const useDocumentIsReady = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    !isReady && setIsReady(true);
  }, []);

  return isReady;
};

export default useDocumentIsReady;
