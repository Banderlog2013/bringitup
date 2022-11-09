
// Прототип сдайдера
export default class Slider {
    constructor({page = "", btns = "", prev = ""} = {}){ // передаем объект в качестве аргумента
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }

}