'use strict';

const child_process = require('child_process');


const getExecutablePath = () => {
  let executablePath;
  if (process.platform === 'linux') {
    try {
      executablePath = child_process.execSync('which chromium-browser').toString().split('\n').shift();
    } catch (e) {
      // NOOP
    }

    if (!executablePath) {
      executablePath = child_process.execSync('which chromium').toString().split('\n').shift();
      if (!executablePath) {
        throw new Error('Chromium not found (which chromium)');
      }
    }
  } else if (process.platform === 'darwin') {
    executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  } else {
    throw new Error('Unsupported platform: ' + process.platform);
  }

  return executablePath;
};


module.exports = {getExecutablePath};
