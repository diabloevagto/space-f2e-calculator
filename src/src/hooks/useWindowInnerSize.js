import { useEffect, useState } from 'react';

const getSize = () => {
  return {
    height: window.innerHeight,
    width: window.innerWidth,
  };
};

export default () => {
  let [size, setSize] = useState(getSize());

  const handleResize = () => {
    setSize(getSize());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
};
