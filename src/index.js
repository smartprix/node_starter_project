function hello() {
	console.log('Hello From Node!!');
}

if (require.main === module) {
	hello();
}

module.exports = hello;
