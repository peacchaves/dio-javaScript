const firstPerson = {
	nome: 'Joaquim',
	idade: 3,
    endereco: 'rua parque lage, n 130, São Paulo-SP'
};

const secondPerson = {
	nome: 'Marciano',
	idade: 95,
    endereco: 'rua dos cubanos, n 430, centro, São Paulo-SP'
};

const thirdPerson = {
	nome: 'Jorge',
	idade: 27,
};

const fourthPerson = {
	nome: 'Maria',
	idade: 11,
    endereco: 'rua dos cubanos, n 430, centro, São Paulo-SP'
};

const fifthPerson = {
	nome: 'Fravinha',
	idade: 33,
    endereco: 'rua parque lage, n 130, São Paulo-SP'
};


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(firstPerson, 20));
console.log(calculaIdade.call(secondPerson, 50));
console.log(calculaIdade.call(thirdPerson, 30));


console.log(calculaIdade.apply(fourthPerson, [15]));
console.log(calculaIdade.apply(fifthPerson, [38]));