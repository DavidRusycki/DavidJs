# SelectionJs
- O selectionJs é basicamente uma especie de classe JS criada com o objetivo de possibilitar o set de valores em um elemento HTML <select>. Inicialmente conta com dois métodos principais que são criaSelectionFromArray e criaSelectionFromJson os nomes são bem sujestivos quanto a sua aplicação.

## criaSelectionFromArray
- Necessita dois parametros "idElement" (Id do elemento HTML onde serão adicionados os valores.) e "aOptions" (Array de valores que serão adicionados) Seu uso se dá quando se tem um array de valores onde os indices são números. Onde ele seta no elemento <option> o .value e o .text estes serão os indices e valores do array passado como parâmetro.

## criaSelectionFromJson
- Necessita dois parametros "idElement" (Id do elemento HTML onde serão adicionados os valores.) e "oOptions" (Json de valores que serão adicionados) Seu uso se dá quando se tem um Json de valores, a existencia do método que suporta Json se dá para quando o usuário quiser setar como .value do elemento HTML uma string, isso não é possível por arrays. Sendo assim no elemento <option> .value recebe a chave do Json e o .text recebe o valor do Json.