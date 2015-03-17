module.exports = function(config) {
  config.set({
    basePath : './',
    
    frameworks: ['jasmine'],
    
    browsers : ['Chrome'],
    
    preprocessors: {
      '**/*.coffee': ['coffee'],
      'wallet.js' : ['coverage'],
      'hdwallet.js' : ['coverage'],
      'HDWalletAccount.js' : ['coverage'],
      'blockchainapi.js' : ['coverage'],
      'import-export.js' : ['coverage'],
      'signer.js' : ['coverage'],
      'wallet-signup.js' : ['coverage']
    },

    coffeePreprocessor: {
      // options passed to the coffee compiler
      options: {
        bare: true,
        sourceMap: true
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js');
      }
    },
        
    autoWatch: true,
    
    files: [
      'bower_components/jquery/dist/jquery.js',
      'build/browserify.js',
      'build/bip39.js',
      'hdwallet.js',
      'HDWalletAccount.js',
      'wallet-signup.js',
      'bower_components/cryptojslib/rollups/sha256.js',
      'bower_components/cryptojslib/rollups/aes.js',
      'bower_components/cryptojslib/rollups/pbkdf2.js',
      'bower_components/cryptojslib/components/cipher-core.js',
      'bower_components/cryptojslib/components/pad-iso10126.js',
      'bower_components/cryptojslib/components/mode-ecb.js',
      'bower_components/cryptojslib/components/pad-nopadding.js',
      'bower_components/browserdetection/src/browser-detection.js',
      'build/sjcl.js',
      'crypto-util-legacy.js',
      'build/xregexp-all.js',
      'wallet.js',
      'import-export.js',
      'signer.js',
      'tests/**/*.js',
      'tests/**/*.js.coffee'
    ],
    
    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-coffee-preprocessor',
      'karma-coverage'
    ],
    
    coverageReporter: {
      type : 'html',
      dir : 'coverage/',
      subdir: '.'
    },
    
    reporters: ['progress','coverage']
    
    
  });
};
