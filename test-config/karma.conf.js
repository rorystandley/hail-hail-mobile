var webpackConfig = require('./webpack.test.js');

module.exports = function (config) {
    var _config = {
        basePath: '../',

        frameworks: ['jasmine'],

        files: [
            {
                pattern: './test-config/karma-test-shim.js',
                watched: true
            },
            {
                pattern: './src/assets/**/*',
                watched: false,
                included: false,
                served: true,
                nocache: false
            }
        ],

        proxies: {
            '/assets/': '/base/src/assets/'
        },

        preprocessors: {
            './test-config/karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        browserConsoleLogOptions: {
            level: 'log',
            format: '%b %T: %m',
            terminal: true
        },

        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly', 'text', 'cobertura', 'clover', 'json-summary', 'json', 'lcov'],
            fixWebpackSourcePaths: true
        },

        reporters: config.coverage ? ['progress', 'coverage-istanbul', 'spec', 'junit', 'coverage-istanbul']
            : ['progress', 'kjhtml', 'spec', 'junit', 'coverage-istanbul'],

        junitReporter: {
            outputDir: 'junit', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'junit.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            useBrowserName: false
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false
    };

    config.set(_config);
};
