import $ from '../core';

$.prototype.addAttribute = function(attributeName, attributeValue) {
    for (let i=0; i < this.length; i++) {
        this[i].setAttribute(attributeName, attributeValue);
    }

    return this;
};

$.prototype.removeAttribute = function(attributeName) {
    for (let i=0; i < this.length; i++) {
        this[i].removeAttribute(attributeName);
    }

    return this;
};

$.prototype.toggleAttribute = function(attributeName) {
    for (let i=0; i < this.length; i++) {
        this[i].toggleAttribute(attributeName);
    }

    return this;
};