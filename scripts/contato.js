function exibirMensagem(texto, tipo) {
    const feedbackDiv = document.getElementById('mensagemFeedback');

    // Limpa classes anteriores e define o novo conteúdo
    feedbackDiv.textContent = texto;
    feedbackDiv.className = ''; // Remove todas as classes

    // Adiciona a classe de estilo (sucesso ou erro) e exibe
    feedbackDiv.classList.add(tipo);
    feedbackDiv.style.display = 'block';

    // Esconde a mensagem após 5 segundos
    setTimeout(() => {
        feedbackDiv.style.display = 'none';
        feedbackDiv.classList.remove(tipo);
    }, 5000);
}

function limparCampos() {
    // Seleciona o formulário e reseta (limpa todos os campos)
    document.getElementById('formContato').reset();
}

function verificarCamposPreenchidos() {
    const form = document.getElementById('formContato');

    // Seleciona todos os campos 'required' (obrigatórios)
    const camposObrigatorios = form.querySelectorAll('[required]');

    let todosPreenchidos = true;

    camposObrigatorios.forEach(campo => {
        // Verifica se o valor está vazio após remover espaços em branco
        if (campo.value.trim() === '') {
            todosPreenchidos = false;
        }
    });

    return todosPreenchidos;
}

function enviarFormulario(event) {
    // Previne o envio padrão 
    event.preventDefault();

    const feedbackDiv = document.getElementById('mensagemFeedback');

    // Esconde qualquer mensagem anterior
    feedbackDiv.style.display = 'none';

    // Verifica se todos os campos estão preenchidos
    if (verificarCamposPreenchidos()) {

    } else {
        // Exibe mensagem de erro se algo estiver faltando
        exibirMensagem('Por favor, preencha todos os campos obrigatórios.', 'erro');
    }
}