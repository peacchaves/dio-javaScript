function calcAprovados(alunos, media) {

	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

const estudantes = [

	{
		nome: 'Flavinho',
		nota: 2,
		turma: '3D',
	},
	{
		nome: 'Heitor',
		nota: 9,
		turma: '3D',
	},
	{
		nome: 'Tubérculo',
		nota: 5.9,
		turma: '1A',
	},
    {
		nome: 'Flaviane',
		nota: 6,
		turma: '1A',
	},
    {
		nome: 'Joaozinho',
		nota: 6,
		turma: '2B',
	}

];

console.log(calcAprovados(estudantes, 6));