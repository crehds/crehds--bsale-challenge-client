function Component({ render, listeners, preloaders }) {
  return () => ({
    toString: () => render(),
    addListeners() {
      listeners.forEach((fn) => fn());
    },
    addPreloaders() {
      preloaders.forEach((fn) => fn());
    }
  });
}

export default Component;
