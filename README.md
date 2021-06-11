## LabenuSystem:

Você estuda na Labenu_ há tanto tempo que já parecem anos, não é? Então, hoje, vamos pedir para criar um sistema que represente o básico da nossa organização. 

Ele deve possuir, ao menos, as 3 entidades importantes:

1. Estudantes 

    Representa estudantes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e os principais hobbies dele. 

2. Docente

    Representa docentes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

3. Turma

    Toda turma é composta das seguintes características: id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

    O módulo pode assumir os valores de 1 a 7 ou `undefined`, indicando que as aulas dessa turma ainda não começaram. Para esse exercício, vamos considerar que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com `-na-night`.

As funcionalidades básicas são:

→ Criar estudante;

→ Criar docente;

→ Criar turma;

→ Adicionar estudante na turma;

→ Adicionar docente na turma;

→ Pegar a idade de algum estudante a partir do id

// create table passatempo (
// 	id int not null primary key auto_increment,
//     nome varchar(255) not null
// );

// create table especialidade(
// 	id int not null primary key auto_increment,
//     nome varchar(255) not null
// );

// create table turma(
// 	id int not null primary key auto_increment,
//     nome varchar(255) not null,
//     data_inicio date not null,
//     data_final date not null,
//     modulo int not null
// );

// create table docente(
// 	id int not null primary key auto_increment,
//     nome varchar(255) not null,
//     email varchar(50) not null unique,
//     data_nasc date not null,
//     turma_id int not null,
//     foreign key (turma_id) references turma(id)
// );

// create table estudante(
// 	id int not null primary key auto_increment,
//     nome varchar(255) not null,
//     email varchar(50) not null unique,
//     data_nasc date not null,
//     turma_id int not null,
//     foreign key (turma_id) references turma(id)
// );

// create table estudante_passamento(
// 	estudante_id int not null,
//     passatempo_id int not null,
//     primary key(estudante_id,passatempo_id),
//     foreign key (estudante_id) references estudante(id),
//     foreign key (passatempo_id) references passatempo(id)
// );

// create table docente_especialidade(
// 	docente_id int not null,
//     especialidade_id int not null,
//     primary key(docente_id,especialidade_id),
//     foreign key (docente_id) references docente(id),
//     foreign key (especialidade_id) references especialidade(id)
// );