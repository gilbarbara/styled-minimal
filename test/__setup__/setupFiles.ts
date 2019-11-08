declare let window: any;

const react = document.createElement('div');
react.id = 'react';
react.style.height = '100vh';
document.body.appendChild(react);

window.skipEventLoop = () => new Promise(resolve => setImmediate(resolve));

window.requestAnimationFrame = (callback: () => void) => {
  setTimeout(callback, 0);
};

window.matchMedia = () => ({
  addListener: () => undefined,
  matches: false,
  removeListener: () => undefined,
});

export {};
