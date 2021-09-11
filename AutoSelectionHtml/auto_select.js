/**
 * Classe que contém as funções para criar dinamicamente um elemento "<select>" do html.
 * @ideia A ideia por trás do projeto é passar o id e um array/json de elementos para serem adicionados em um elemento select do html.
 */
var SelectionJs = (function() {

    /**
     * Realiza o processamento necessário para definir os valores e indices do array no select.
     */
    var criaSelectFunctionArray = (idElement, aOptions) => {
        oSelection = getElement(idElement);
        aOptions.map((valor, indice) => {
            oSelection.appendChild(montaOption(valor, indice));
        });
    };

    /**
     * Realiza o processamento necessário para definir os valores e chaves do Json no select.
     */
    var criaSelectionFunctionJson = (idElement, oOptions) => {
        oSelection = getElement(idElement);
        for (sChave in oOptions) {
            oSelection.appendChild(montaOption(oOptions[sChave], sChave));
        };
    }

    /**
     * Retorna o elemento HTML do respectivo id.
     * @param {String} idElement - String com o id do elemento HTML.
     * @returns HTML ELEMENT
     */
    var getElement = (idElement) => {
        return document.getElementById(idElement);
    };

    /**
     * Monta um novo elemento option de acordo com os parâmetros.
     * @param {Mixed} valor - Valor de determinada posição do array.
     * @param {Mixed} indice - Indice do array/json que está sendo percorrido.
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
         * @require para adicionar os valores de um array o array deve ter indices numericos. Caso contrário deve-se usar o método criaSelectFromJson
         * @param {String} idElement - Id do elemento <select> que deseja adicionar os valores do array.
         * @param {Array} aOptions - Array onde o indice será definido como value e o valor em si será o text.
         */
        criaSelectFromArray : (idElement, aOptions) => {
            criaSelectFunctionArray(idElement, aOptions);
        },

        /**
         * Adiciona no select os itens do Json
         * @param {String} idElement - Id do elemento <select> que deseja adicionar os valores.
         * @param {Json} oOptions - Json onde as chaves serão definidas como value e o valor em si será o text.
         */
        criaSelectionFromJson : (idElement, oOptions) => {
            criaSelectionFunctionJson(idElement, oOptions);
        }

    };

}());
    