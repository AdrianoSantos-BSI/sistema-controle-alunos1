const alunos = [];

function cadastrarAluno(nome, matricula) {
    if (!nome.trim() || !matricula.trim()) {
        return "Preencha o nome e a matrícula.";
    }

    alunos.push({
        nome: nome,
        matricula: matricula
    });

    return "Aluno cadastrado com sucesso.";
}

console.log(cadastrarAluno("Maria Silva", "2026001"));
console.log(alunos);