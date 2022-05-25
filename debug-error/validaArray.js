function validaArrays(arr, num) {

	try {
		if (!arr && !num) throw new ReferenceError('Parâmetros não encontrados');

		if (typeof arr !== 'object')
			throw new TypeError('O elemento precisa ser do tipo array');

		if (typeof num !== 'number')
			throw new TypeError('O elemento precisa ser do tipo number');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido');

		return arr;


	} catch (e) {

		if (e instanceof RangeError) {
			console.log('RangeError');
			console.log(e.stack);

		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError');
			console.log(e.stack);

		} else {
			console.log('Outro erro');
			console.log(e.stack);
		}
	}
    
}



console.log(validaArrays([], 3));
console.log(validaArrays([1, 2, 3, 4 , 5], "5"));
console.log(validaArrays([1, 2, 3, 4 , 5], 5));