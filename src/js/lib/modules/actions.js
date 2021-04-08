import $ from '../core';

$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

$.prototype.eq = function (n) {
    const objLength = Object.keys(this).length;
    const swap = this[n];

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;

    return this;
};

$.prototype.index = function () {
    const parent = this[0].parentNode,
        childs = [...parent.children]; // spred operator

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

$.prototype.find = function (selector) {
    let numbersOfItems = 0,
        counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length === 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numbersOfItems += arr.length;
    }

    this.length = numbersOfItems;

    for (let k = numbersOfItems; k < Object.keys(this).length; k++) {
        delete this[k];
    }

    return this;
};

$.prototype.closest = function (selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        if (this[i].closest(selector) == null) {
            this[i] = 'Error';
        }
        else {
            this[i] = this[i].closest(selector);
        }
        counter++;
    }

    for (let k = counter; k < Object.keys(this).length; k++) {
        delete this[k];
    }

    return this;
};

$.prototype.siblings = function () {
    let numbersOfItems = 0,
        counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] == arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numbersOfItems += arr.length - 1;
    }

    this.length = numbersOfItems;

    for (let k = numbersOfItems; k < Object.keys(this).length; k++) {
        delete this[k];
    }

    return this;
};