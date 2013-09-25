SauceLabs
=========

JS unit testing using Mocha and SauceLabs, based on the [grunt tutorial](https://saucelabs.com/docs/javascript-unit-testing-tutorial).

To get the project running, you'll need to set your SauceLabs username and API key as environment variables:

	$ export SAUCE_USERNAME=your_sauce_username
    $ export SAUCE_ACCESS_KEY=your_sauce_api_key
    
Once that's done, install the project dependencies:

	$ npm install

And then run the tests:

	$ grunt test
    
Tests are defined in the /test folder and specified by the `urls` option of the `saucelabs-mocha` task:

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
	}