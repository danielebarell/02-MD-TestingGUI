import {PerfectSquare} from "./js/perfect-square.js";
import {PageLayout} from "./js/page-layout.js";

const perfectSquare = new PerfectSquare(document.querySelector('#shape-container'));
const pageLayout = new PageLayout();
function applySquare(){
    const w = document.body.clientWidth;
    const h = document.body.clientHeight;
    if(h >= w){
        perfectSquare.applyVertical(w,h);
    }else{
        perfectSquare.applyHorizontal(w,h);
    }
}
function applyLayout(){
    const w = document.body.clientWidth;
    const h = document.body.clientHeight;
    if(h >= w){
        pageLayout.applyVertical();
    }else{
        pageLayout.applyHorizontal();
    }
}
window.addEventListener('resize',()=>{
    applySquare();
    applyLayout();
});
/*set square and page layout just at start*/
window.addEventListener('load',()=>{
    applySquare();
    applyLayout();
})
