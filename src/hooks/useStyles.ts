import { useState } from 'react';

const useStyle = ({ defaultStyles, hoverStyles }: any) => {
  const [styles, setStyles] = useState(defaultStyles);

  function handleMouseEnter() {
    setStyles({
      ...defaultStyles,
      ...hoverStyles,
    });
  }

  function handleMouseOut() {
    setStyles(defaultStyles);
  }

  return {
    styles,
    handleMouseEnter,
    handleMouseOut,
  };
};

export default useStyle;
