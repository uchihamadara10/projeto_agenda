const form = document.getElementById("form-agenda")


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizarTabela();
})

function adicionaLinha(){
    const inputNomePessoa = document.getElementById("nome-pessoa");
    const inputNumeroPessoa = document.getElementById('numero-pessoa');


        let linha = '<tr>';
        linha += `<td>${inputNomePessoa.value}</td>`;
        linha += `<td>${inputNumeroPessoa.value}</td>`;
        linha += '</tr>';
        linhas += linha;
        
    }
    
    inputNomePessoa.value = '';
    inputNumeroPessoa.value = '';

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
