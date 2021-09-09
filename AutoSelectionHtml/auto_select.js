
/**
 * Classe que contém as funções para criar dinamicamente um elemento "<select>" do html.
 * @ideia A ideia por trás do projeto é passar o id e um array de elementos para serem adicionados em um elemento select do html.
 */
var SelectionJs = (function() {

    /**
     * Realiza o processamento necessário para definir os valores e indices do array no select.
     */
    var criaSelectFunctionArray = (idElement, aOptions) => {
        oSelection = getElement(idElement);
        aOptions.map((valor, indice) => {
            var  oOption = montaOption(valor, indice);
            oSelection.appendChild(oOption);
        });
    };

    /**
     * Retorna o elemento HTML do respectivo id.
     * @param {String} idElement - String com o id do elemento HTML.
     * @returns HTMLELEMENT
     */
    var getElement = (idElement) => {
        return document.getElementById(idElement);
    };

    /**
     * Monta um novo elemento option de acordo com os parâmetros.
     * @param {Mixed} valor - Valor de determinada posição do array.
     * @param {Mixed} indice - Indice do array que está sendo percorrido.
     * @returns Option Element
     */
    var montaOption = (valor, indice) => {
        var oOption = getNewOption();
        oOption.value = indice;
        oOption.text = valor
        return oOption;
    };

    /**
     * Retorna um novo elemento html Option
     * @returns Option Element
     */
    var getNewOption = () => {
        return document.createElement('option');
    };

    return {

        /**
         * Adiciona no select os itens do array.
         * @param {String} idElement - Id do elemento <select> que deseja adicionar os valores do array.
         * @param {Array} aOptions - Array onde o indice será definido como value e o valor em si será o text.
         */
        criaSelectFromArray : (idElement, aOptions) => {
            criaSelectFunctionArray(idElement, aOptions);
        }

    };

}());
    