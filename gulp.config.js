'use strict';

module.exports = {
  settings: {
    scripting: 'ts'
  },
  paths: {
    src: {
      ts: {
        entry: './src/ts/index.ts',
        scripts: './src/ts/**/*.ts'
      }
    }
  }
};
