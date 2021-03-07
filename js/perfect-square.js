/**
 * Class representing a responsive square, centered in its container.
 * @author The Companionship <dan.barell@gmail.com>
 * */
export class PerfectSquare{
    //the HTML element reference
    __square
    //margin around the square
    __margin = 25;
    /**
     * PerfectSquare
     * @constructor
     * @param {HTMLElement} target - the element to be squared
     * @param {number} margin - a positive integer to set the margin around the square, default value: 20
     * */
    constructor(target, margin = 20){
        this.__square = target;
        this.__margin = margin;
        console.log('Perfect Square constructor', this.__square, this.__margin);
    }

    /**
     * @function applyHorizontal
     * @param {number} outerWidth - the square outer box's width
     * @param {number} outerHeight - the square outer box's height
     */
    applyHorizontal(outerWidth,outerHeight){
        //these styles no more exists
        //this.__square.classList.remove('square-vertical')
        //this.__square.classList.add('square-horizontal');
        //Horizontally the square size depends on height
        const size = outerHeight - (this.__margin * 2);
        const top = this.__margin;
        const left = (outerWidth - size)/2;
        //set the style attribute, use short object syntax
        this.style = {
            size,
            left,
            top
        };
    }
    /**
     * @function applyVertical
     * @param {number} outerWidth - the square outer box's width
     * @param {number} outerHeight - the square outer box's height
     */
    applyVertical(outerWidth,outerHeight){
        //these styles no more exists
        //this.__square.classList.remove('square-horizontal');
        //this.__square.classList.add('square-vertical');
        //Vertically the square size depends on width
        const size = outerWidth - (this.__margin * 2);
        const left = this.__margin;
        const top = (outerHeight - size)/2;
        //set the style attribute, use short object syntax
        this.style = {
            size,
            left,
            top
        };
    }
    /**
     * style, write only.
     * @type {PerfectSquare~StyleProps} styleProps
     * @typedef PerfectSquare~StyleProps
     * @property {number} size - the size of the square
     * @property {number} left - the horizontal coordinate of the square origin, cartesian x.
     * @property {number} top - the vertical coordinate of the square origin, cartesian y.
     * */
    set style(styleProps){
        //use object destructuring notation
        const {size, left, top} = styleProps;
        this.__square.style = `width: ${size}px; height: ${size}px; left: ${left}px; top: ${top}px;`;
    }
}
