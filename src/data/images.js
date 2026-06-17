// Helper to safely import images with fallback
// CRA's require() will throw at build time if the file doesn't exist,
// so we use a try/catch wrapper.

function tryRequire(path) {
  try {
    return require(`../assets/images/${path}`);
  } catch (e) {
    return null;
  }
}

export const images = {
  sakuraCourtyard: tryRequire('sakura-courtyard.jpeg'),
  floorplan: tryRequire('floorplan.jpeg'),
  teaRoom: tryRequire('tea-room.jpeg'),
  coffeeBar: tryRequire('coffee-bar.jpeg'),
  cafeInterior: tryRequire('cafe-interior.jpeg'),
  logo: tryRequire('logo.png'),
};
