
class SiteController {
    //Construtor do controller.
    constructor() {
        //captura elementos do html.
        this.searchEl = document.querySelector("#search");
        this.findEl = document.querySelector("#find");
        //Carrega arquivo com os dados na variável json.
        this.json = 'characters.json';
        //inicia eventos.
        this.startEvents();
    }

    startEvents(){

        //Seleciona os botões de geração e atribui eventos de clique à eles.
        document.querySelectorAll(".btn-generate").forEach(btn =>
        btn.addEventListener("click", evt => {
            //Quando o botão for clicado deverá ser feito uma promisse.
            fetch(this.json)
                .then(data => data.json())
                .then(function (data) {
                    //variável carácters deverá armazenar um personagem selecionado aleatóriamente.
                    let character = data["Characters"][Math.floor(Math.random()*data["Characters"].length)];
                    //Infos do personagem deverá ser inseridos no html.
                    document.querySelector("#characterName").innerHTML = character["name"];
                    document.getElementById("img").src = "img/" + character["url"];
                });
            //Site deverá ocultar a div search e apresentar a div find com o resultado.
            this.searchEl.style.display = "none";
            this.findEl.style.display = "flex";
        }));

    }

}