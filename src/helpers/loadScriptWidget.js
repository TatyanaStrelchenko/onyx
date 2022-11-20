const loadScriptWidget = (url, ref) =>
  new Promise((resolve) => {
    document.getElementById(url)?.removeChild();
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.id = url;
    script.onload = () => {
      const widgetLoad = ref.current.querySelectorAll('.tfcWidget');
      widgetLoad.forEach((item) => {
        item.removeAttribute('hidden');
      });
      resolve();
    };

    ref.current.appendChild(script);
  });

export default loadScriptWidget;
