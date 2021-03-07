import {PerfectSquare} from "./js/perfect-square.js";
import {PageLayout} from "./js/page-layout.js";

const asideSize = 80;
//asideSize passed to perfectSquare and pageLayout to keep their geometry coordinated
const perfectSquare = new PerfectSquare(document.querySelector('#shape-container'),asideSize);
const pageLayout = new PageLayout(document.querySelector('#page'),asideSize);
function applyResize(){
    const w = document.body.clientWidth;
    const h = document.body.clientHeight;
    if(h >= w){
        perfectSquare.applyVertical(w,h);
        pageLayout.applyVertical();
    }else{
        perfectSquare.applyHorizontal(w,h);
        pageLayout.applyHorizontal();
    }
}
window.addEventListener('resize',()=>{
    applyResize();
});
/*set square and page layout just at start*/
window.addEventListener('load',()=>{
    applyResize();
})
