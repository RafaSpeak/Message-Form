# EXERCÍCIOS HTML + CSS + JS INTERMEDIÁRIO

## Descrição
Este projeto é um exercício prático que utiliza HTML, CSS e JavaScript para criar um formulário de contato interativo. Ele inclui um design responsivo e um script para manipulação dos dados do formulário.

## Estrutura do Projeto
```
/
|-- index.html
|-- src/
|   |-- css/
|   |   |-- reset.css
|   |   |-- style.css
|   |   |-- responsive.css
|   |-- js/
|   |   |-- script.js
|   |-- image/
|   |   |-- bg-repeat.jpg
```

## Tecnologias Utilizadas
- HTML5
- CSS3 (reset, estilos gerais e responsivos)
- JavaScript (manipulação do formulário)
- Google Fonts (Roboto)

## Como o CSS é Usado
O CSS neste projeto é usado para criar um design moderno e responsivo. Aqui estão alguns dos principais aspectos da estilização:

- **Fonte personalizada**: O projeto usa a fonte `Roboto` do Google Fonts para um visual mais profissional.
- **Layout responsivo**: O uso de `flexbox` garante que o formulário e os elementos internos sejam bem organizados em diferentes tamanhos de tela.
- **Estilização do formulário**:
  - Campos de entrada (`input`, `textarea`) têm bordas arredondadas e um esquema de cores limpo.
  - Classes dinâmicas `valid` e `invalid` alteram as bordas dos campos para indicar validação correta ou erro.
  - O botão de envio (`button`) tem uma transição de cor ao passar o mouse.

## Como o JavaScript é Usado
O JavaScript neste projeto é responsável pela validação dos campos do formulário e pela interação com o usuário. Aqui estão algumas das principais funcionalidades:

- **Validação de campos**:
  - Impede o envio do formulário caso existam campos obrigatórios vazios.
  - Aplica classes CSS dinâmicas (`valid` e `invalid`) para indicar a validação dos campos.
  - Exibe mensagens de erro quando um campo obrigatório não está preenchido.
- **Eventos de interação**:
  - Remove mensagens de erro quando o usuário começa a digitar.
  - Altera a cor da borda dos inputs para indicar se o campo é válido ou inválido.
  - Impede o envio do formulário se houver campos inválidos.

## Funcionalidades
- Formulário de contato com campos obrigatórios.
- Design responsivo para diferentes dispositivos.
- Validação de campos com classes CSS dinâmicas (`valid`/`invalid`).
- Indicação visual de erro nos campos obrigatórios.
- Efeito de transição no botão ao passar o mouse.
- Mensagens de erro dinâmicas exibidas quando os campos não são preenchidos corretamente.

## Como Usar
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Acesse o diretório do projeto e abra o arquivo `index.html` no navegador.

## Personalização
- Para modificar o estilo, edite os arquivos CSS em `src/css/`.
- Para alterar a lógica do formulário, edite `src/js/script.js`.
- Para alterar a imagem de fundo, substitua `src/image/bg-repeat.jpg`.

## Autor
- [Rafael Do Rosario](https://github.com/seu-usuario)

## Licença
Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

