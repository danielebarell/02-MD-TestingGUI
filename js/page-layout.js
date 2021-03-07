export class PageLayout{
    __page;
    __VERTICAL_STYLE = 'page-layout-vertical';
    __HORIZONAL_STYLE = 'page-layout-horizontal';
    constructor(target) {
        this.__page = target;
        console.log('PageLayout constructor',this.__page);
    }
    applyHorizontal(){
        console.log('PageLayout applyHorizontal');
        this.__page.classList.add(this.__HORIZONAL_STYLE);
        this.__page.classList.remove(this.__VERTICAL_STYLE);
    }
    applyVertical(){
        console.log('PageLayout applyVertical');
        this.__page.classList.add(this.__VERTICAL_STYLE);
        this.__page.classList.remove(this.__HORIZONAL_STYLE);
    }
}
