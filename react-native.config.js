module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./assets/fonts/'], // stays the same
  dependencies: {
    'react-native-image-filter-kit': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
  },
};
