export class PageLayout{
    __page;
    constructor(target) {
        this.__page = target;
        console.log('PageLayout constructor',this.__page);
    }
    applyHorizontal(){
        console.log('PageLayout applyHorizontal');
    }
    applyVertical(){
        console.log('PageLayout applyVertical');
    }
}
