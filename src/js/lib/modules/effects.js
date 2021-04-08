import $ from '../core';

$.prototype.animateOverTime = function(duration, callback, finall) {
    let timeStart;

    function _animateOvetTime(time) {
        if (!timeStart){timeStart = time;}

        let timeElapsed = time - timeStart,
            complaction = Math.min(timeElapsed / duration, 1);

        callback(complaction);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOvetTime);
        }
        else {
            if (typeof finall === 'function') {
                finall();
            }
        }
    }

    return _animateOvetTime;
};

$.prototype.fadeIn = function(durattion, display, finall) {
    durattion = durattion || 500;
    
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block'; 

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const animate = this.animateOverTime(durattion, _fadeIn, finall);
        requestAnimationFrame(animate);
    }

    return this;
};

$.prototype.fadeOut = function(durattion, finall) {
    durattion = durattion || 500;

    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const animate = this.animateOverTime(durattion, _fadeOut, finall);
        requestAnimationFrame(animate);
    }

    return this;
};

$.prototype.fadeToggle = function(durattion, display, finall) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            $(this[i]).fadeIn(durattion, display, finall);
        }
        else {
            $(this[i]).fadeOut(durattion, finall);
        }
    }

    return this;
};