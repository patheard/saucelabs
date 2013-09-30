module.exports = function(grunt) {
	var browsers = [{
        browserName: "firefox",
        version: "22",
        platform: "XP"
    },{
        browserName: "firefox",
        version: "21",
        platform: "XP"
    },{
        browserName: "chrome",
        version: "29",
        platform: "XP"
    },{
        browserName: "chrome",
        version: "28",
        platform: "Mac 10.6"
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