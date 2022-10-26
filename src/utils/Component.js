function Component({ render, listeners, preloaders }) {
  return (props) => ({
    toString: () => render(props),
    addListeners() {
      listeners.forEach((fn) => fn());
    },
    addPreloaders() {
      preloaders.forEach((fn) => fn());
    }
  });
}

export default Component;
