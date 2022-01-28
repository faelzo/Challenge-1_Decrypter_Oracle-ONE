
/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
*/

/* Regras Decodificador:
"enter" é convertido para "e"
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação
*/

var btn_cripto = document.querySelector("#btn-cripto");
var btn_descripto = document.querySelector("#btn-descripto");
var btn_copy = document.querySelector("#btn-copy");

var input = document.querySelector("#input-texto");
var output = document.querySelector("#msg");

function code() {
	var palavra = input.value.toLowerCase();
	var codigo = '';
	var vogais = ['a','e','i','o','u'];

	codigo = palavra.replace(/e/g,"enter")
	.replace(/i/g,"imes")
	.replace(/a/g,"ai")
	.replace(/o/g,"ober")
	.replace(/u/g,"ufat");

	output.value = codigo;

	}

	function decode() {
		var palavra = input.value;

		codigo = palavra.replace(/enter/g,"e")
		.replace(/imes/g,"i")
		.replace(/ai/g,"a")
		.replace(/ober/g,"o")
		.replace(/ufat/g,"u")

		output.value = codigo;
	}

function copyText() {
	output.select();
	document.execCommand("copy");
}

btn_cripto.onclick = code
btn_descripto.onclick = decode
btn_copy.onclick = copyText;
