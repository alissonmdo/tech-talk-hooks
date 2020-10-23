import { useEffect } from 'react';

function EffectTab() {
  useEffect(() => {
    const onMouseMove = (e) => {
      console.log(e);
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

return <div>{'EffectTab'}</div>;
}

export default EffectTab;
