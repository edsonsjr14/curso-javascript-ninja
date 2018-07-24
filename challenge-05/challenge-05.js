/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myvar = [2, 4, 26, 29, 30, 70];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var recebe = function(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
recebe(myvar)[1];


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var retornaNumero = function(arr, num){
	return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myarr = ['Teste', 2, true, 'Teste2', false, 5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaNumero(myarr,0); // "Teste"
retornaNumero(myarr,1); // 2
retornaNumero(myarr,2); // true
retornaNumero(myarr,3); // "Teste2"
retornaNumero(myarr,4); // false
retornaNumero(myarr,5); // 5

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
var book = function (nome){
	var bib = {livro1:{quantidadePaginas: 20, autor: 'Autor 1', editora: 'Editora 1'}, 
		livro2: {quantidadePaginas: 30, autor: 'Autor 2', editora: 'Editora 2'},
		livro3: {quantidadePaginas: 60, autor: 'Autor 3', editora: 'Editora 3'}
	};
	if(nome !== undefined) return bib[nome];
  return bib;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book()); // {livro1: {…}, livro2: {…}, livro3: {…}}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro livro1 tem '+book("livro1").quantidadePaginas+' páginas!');
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro1 é '+book("livro1").autor+'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro livro1 foi publicado pela editra '+book("livro1").editora+'.');