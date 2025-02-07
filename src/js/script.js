document.addEventListener("DOMContentLoaded", function () {
    // Obtendo o formulário pelo ID
    const form = document.getElementById("form");
    if (!form) return; // Se não encontrar o formulário, sai da função

    // Pegando todos os inputs e textareas do formulário e o botão de envio (submit) do formulário (botão de enviar) para validação dos campos obrigatórios antes do envio do formulário para o servidor (backend).
    const inputs = form.querySelectorAll("input, textarea");
    const submitButton = form.querySelector("button[type='submit']");

    // Adicionando evento de submit no formulário para validação dos campos obrigatórios antes do envio do formulário para o servidor (backend)
    form.addEventListener("submit", function (event) {
        let allValid = true; // Variável para controlar a validade geral do formulário

        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling; // Próximo elemento depois do input
            if (input.value.trim() === "") { // Verifica se o campo está vazio
                input.classList.add("invalid");
                input.classList.remove("valid");

                // Se não existir uma mensagem de erro, cria uma
                if (!errorMessage || !errorMessage.classList.contains("error-message")) {
                    const errorText = document.createElement("p");
                    errorText.classList.add("error-message");
                    errorText.innerText = "Campo obrigatório";
                    input.parentNode.insertBefore(errorText, input.nextSibling);
                }

                allValid = false; // Define o formulário como inválido
            } else {
                input.classList.add("valid");
                input.classList.remove("invalid");

                // Remove a mensagem de erro caso o campo tenha sido preenchido
                if (errorMessage && errorMessage.classList.contains("error-message")) {
                    errorMessage.remove();
                }
            }
        });

        if (!allValid) {
            event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
        }
    });

    // Adicionando eventos para cada input
    inputs.forEach(input => {
        // Quando o usuário sai do campo
        input.addEventListener("blur", function () {
            const errorMessage = input.nextElementSibling;
            if (input.value.trim() === "") {
                input.classList.add("invalid");
                input.classList.remove("valid");

                // Se não existir uma mensagem de erro, cria uma
                if (!errorMessage || !errorMessage.classList.contains("error-message")) {
                    const errorText = document.createElement("p");
                    errorText.classList.add("error-message");
                    errorText.innerText = "Campo obrigatório";
                    input.parentNode.insertBefore(errorText, input.nextSibling);
                }
            }
        });

        // Quando o usuário clica no campo
        input.addEventListener("focus", function () {
            if (input.value.trim() === "") {
                input.classList.remove("invalid"); // Remove a classe de erro ao focar no campo
            }
        });

        // Quando o usuário começa a digitar no campo
        input.addEventListener("input", function () {
            const errorMessage = input.nextElementSibling;
            if (input.value.trim() === "") {
                input.classList.add("invalid");
                input.classList.remove("valid");

                // Se não existir uma mensagem de erro, cria uma
                if (!errorMessage || !errorMessage.classList.contains("error-message")) {
                    const errorText = document.createElement("p");
                    errorText.classList.add("error-message");
                    errorText.innerText = "Campo obrigatório";
                    input.parentNode.insertBefore(errorText, input.nextSibling);
                }
            } else {
                input.classList.add("valid");
                input.classList.remove("invalid");

                // Remove a mensagem de erro se o campo for preenchido
                if (errorMessage && errorMessage.classList.contains("error-message")) {
                    errorMessage.remove();
                }
            }
        });
    });

    // Quando o botão de envio é clicado
    submitButton.addEventListener("click", function () {
        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;
            if (input.value.trim() === "") {
                input.classList.add("invalid");
                input.classList.remove("valid");

                // Se não existir uma mensagem de erro, cria uma
                if (!errorMessage || !errorMessage.classList.contains("error-message")) {
                    const errorText = document.createElement("p");
                    errorText.classList.add("error-message");
                    errorText.innerText = "Campo obrigatório";
                    input.parentNode.insertBefore(errorText, input.nextSibling);
                }
            }
        });
    });
});
