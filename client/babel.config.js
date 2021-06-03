module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.android.js', '.ios.js'],
          root: ['./'],
          alias: {
            assets: './assets',
            components: './components',
            constants: './constants',
            screens: './screens',
            ui: './ui',
            services: './services',
          },
        },
      ],
    ],
  };
};
