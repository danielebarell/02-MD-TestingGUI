/**
 * Class representing a page whose layout is responsive.
 * Styles like 'page-layout', 'page-layout-vertical' and 'page-layout-horizontal' are implicated
 * and must be set like in './css/page-layout.css' and linked to HTML page.
 *
 * @author The Companionship <dan.barell@gmail.com>
 * */
export class PageLayout{
    //the HTML element reference to be laid out
    __page;
    //the format style status
    __formatStyle;
    //the name of the style stuffed in page-layout CSS that manage the vertical layout
    __VERTICAL_STYLE = 'page-layout-vertical';
    //the name of the style stuffed in page-layout CSS that manage the horizontal layout
    __HORIZONTAL_STYLE = 'page-layout-horizontal';
    /**
     * PageLayout
     * @constructor
     * @param {HTMLElement} target - the target to be laid out as a page.
     * @param {number} asideSize - a positive integer that helps the page internal components to set correct spaces,
     * default value: 100
     * */
    constructor(target, asideSize = 100) {
        this.__page = target;
        if(this.__page.classList.contains('page-layout')){
            const pxAsideSize = `${asideSize}px`;
            //see: https://css-tricks.com/updating-a-css-variable-with-javascript/
            this.__page.style.setProperty('--aside-size',pxAsideSize);
        }else{
            throw 'target misses have page-layout style';
        }
        console.log('PageLayout constructor',this.__page, 'asideSize', asideSize);
    }
    /**
     * @function applyHorizontal - set page's horizontal style.
     * */
    applyHorizontal(){
        if(this.__formatStyle !== this.__HORIZONTAL_STYLE) {
            console.log('PageLayout applyHorizontal');
            this.__page.classList.add(this.__HORIZONTAL_STYLE);
            this.__page.classList.remove(this.__VERTICAL_STYLE);
            this.__formatStyle = this.__HORIZONTAL_STYLE;
        }
    }
    /**
     * @function applyVertical - set page's vertical style.
     * */
    applyVertical(){
        if(this.__formatStyle !== this.__VERTICAL_STYLE) {
            console.log('PageLayout applyVertical');
            this.__page.classList.add(this.__VERTICAL_STYLE);
            this.__page.classList.remove(this.__HORIZONTAL_STYLE);
            this.__formatStyle = this.__VERTICAL_STYLE;
        }
    }
}
