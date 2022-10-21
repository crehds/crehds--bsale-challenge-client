function Component({ render, listeners }) {
  return () => ({
    toString: () => render(),
    addListeners() {
      listeners.forEach((fn) => fn());
    }
  });
}

export default Component;
