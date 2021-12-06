const helloWorld = require('./hello-world.js');

describe('Hello World', () => {
	test('says "Hello, World!"', () => {
		expect(helloWorld()).toEqual('Hello, World!');
	});
});
