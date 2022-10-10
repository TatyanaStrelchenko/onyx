import { useEffect, useRef } from 'react';

const useScript = (url) => {
  const ref = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.onload = () => {
      const widgetLoad = ref.current.querySelectorAll('.tfcWidget');
      widgetLoad.forEach((item) => {
        item.removeAttribute('hidden');
      });
    };

    ref.current.appendChild(script);
    return () => {
      document.getElementById(ref.current)?.removeChild(script);
    };
  }, [ref]);

  return ref;
};

export default useScript;
