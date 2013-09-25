module.exports = function(grunt) {
	var browsers = [{
		browserName: 'firefox',
		platform: 'Windows XP'
	}, {
		browserName: 'firefox',
		platform: 'Windows 7'
	}, {
		browserName: 'chrome',
		platform: 'Windows XP'
	}, {
		browserName: 'chrome',
		platform: 'Windows 7'
	}, {
		browserName: 'chrome',
		platform: 'Linux'
	}, {
		browserName: 'internet explorer',
		platform: 'Windows 8',
		version: '10'
	}, {
		browserName: 'internet explorer',
		platform: 'Windows 7',
		version: '9'
	}, {
		browserName: 'internet explorer',
		platform: 'Windows XP',
		version: '8'
	}, {
		browserName: 'opera',
		platform: 'Windows 7',
		version: '12'
	}, {
		browserName: 'safari',
		platform: 'OS X 10.6',
		version: '5'
	}, {
		browserName: 'iphone',
		platform: 'OS X 10.8',
		version: '6'
	}, {
		browserName: 'iphone',
		platform: 'OS X 10.6',
		version: '5.0'
	}, {
		browserName: 'iphone',
		platform: 'OS X 10.6',
		version: '4'
	}, {
		browserName: 'ipad',
		platform: 'OS X 10.8',
		version: '6'
	}, {
		browserName: 'ipad',
		platform: 'OS X 10.6',
		version: '5.0'
	}, {
		browserName: 'ipad',
		platform: 'OS X 10.6',
		version: '4'
	}];

	grunt.initConfig({
        connect: {
            server: {
                options: {
                    base: "",
                    port: 9999
                }
            }
        },
        'saucelabs-mocha': {
            all: {
                options: {
                    urls: ["http://127.0.0.1:9999/test/window-ready.html"],
                    tunnelTimeout: 5,
                    build: (new Date().getTime()),
                    concurrency: 3,
                    browsers: browsers,
                    testname: "patheard/saucelabs - Mocha",
                    tags: ["master"]
                }
            }
        },
        watch: {}
    });

    // Loading dependencies
    for (var key in grunt.file.readJSON("package.json").devDependencies) {
        if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
    }

    grunt.registerTask("dev", ["connect", "watch"]);
    grunt.registerTask("test", ["connect", "saucelabs-mocha"]);
};