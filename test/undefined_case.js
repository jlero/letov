const Letov = require('../lib/index')();

for (let i = 0; i < 10000; i += 1) {
	if (Letov.random() === undefined) {
		throw 'Андефайнд найден.' + i
	} 
}

console.log('Тест пройден.')