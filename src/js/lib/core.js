const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // пустой объект
    }

    // Проверка на передачу елемента в функцию вместо селектора  
    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;

    return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;