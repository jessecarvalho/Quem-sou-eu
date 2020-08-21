
class SiteController {

    constructor() {
        this.searchEl = document.querySelector("#search");
        this.findEl = document.querySelector("#find");
        this.startEvents();


    }

    startEvents(){
        const json = 'characters.json';

        document.querySelectorAll(".btn-generate").forEach(btn =>
        btn.addEventListener("click", evt => {

            fetch(json)
                .then(data => data.json())
                .then(function (data) {
                    let json = data["Characters"][Math.floor(Math.random()*data["Characters"].length)];
                    document.querySelector("#characterName").innerHTML = json["name"];
                    document.getElementById("img").src = "img/" + json["url"];
                });
            this.searchEl.style.display = "none";
            this.findEl.style.display = "flex";
        }));
    }

    newCharacter(data){

    }
}