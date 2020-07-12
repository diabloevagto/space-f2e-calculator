const baseName = 'space-f2e-calculator';

module.exports = {
  development: {
    REACT_APP_BASE_NAME: baseName,
    // PUBLIC_URL: `http://localhost:3000/${baseName}`,
  },
  test: {
    GENERATE_SOURCEMAP: false,
    REACT_APP_BASE_NAME: baseName,
    // PUBLIC_URL: `https://diabloevagto.github.io/${baseName}`,
  },
  production: {
    GENERATE_SOURCEMAP: false,
    REACT_APP_BASE_NAME: baseName,
    // PUBLIC_URL: `https://diabloevagto.github.io/${baseName}`,
  },
};
