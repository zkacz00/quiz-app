import React, { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div className={`pageTransition ${isVisible ? 'pageTransition--enter' : 'pageTransition--exit'}`}>
      {children}
    </div>
  );
};

export default PageTransition;