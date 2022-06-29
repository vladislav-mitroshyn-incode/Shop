import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface IScrollToTopProps {
  children: React.ReactNode;
}

const ScrollToTop: React.FC<IScrollToTopProps> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <div>{children}</div>;
};

export default ScrollToTop;
