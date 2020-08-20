
class SiteController {

    constructor() {
        this.searchEl = document.querySelector("#search");
        this.findEl = document.querySelector("#find");
        this.startEvents();
    }

    startEvents(){
        document.querySelectorAll(".btn-generate").forEach(btn =>
        btn.addEventListener("click", evt => {
            this.searchEl.style.display = "none";
            this.findEl.style.display = "flex";
        }));

    }
}