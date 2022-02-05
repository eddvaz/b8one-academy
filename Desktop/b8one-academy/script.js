// Função para adicionar quantidade de produtos
let counterVal = 0;

function acrescentar() {
    updateDisplay(++counterVal);
}

function diminuir() {
    updateDisplay(--counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}


// Função para enviar e-mails
function ValidateEmail (inputText) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailFormat)) {
        alert("Email enviado com sucesso!")
    } else {
        alert("Insira um email válido, por favor!")
    }
}
