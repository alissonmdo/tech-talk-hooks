import { useRef } from 'react';

export const useCountRenders = (name = 'Component') => {
  const renders = useRef(0);
  renders.current++;
  console.log(
    `💫 > ${name} renders: ${renders.current} time${
      renders.current === 1 ? '' : 's'
    }`
  );
};
