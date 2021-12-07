let elBtnGroup = document.querySelectorAll('.product__btn');
let elTemplate = document.querySelector('#tempproduct').content;
let elFg = document.createDocumentFragment();
let elList = document.querySelector('.product__result-list');
// console.log(elImgs.src);
elBtnGroup.forEach(function(items){
  items.addEventListener("click",output);
})
function output(e) {
  let arr = [];
  let father =  e.target.parentElement.parentElement;
  arr.push(father)
  for(let template in arr) {
    let tmp = elTemplate.cloneNode(true)
    tmp.querySelector('.product__result-img').src = arr[template].querySelector('.product__img').src;
    tmp.querySelector('.product__result-title').textContent = arr[template].querySelector('.product__title').textContent;
    tmp.querySelector('.product__result-text').textContent = arr[template].querySelector('.product__text').textContent;
    tmp.querySelector('.result__closes').addEventListener("click", function(e){
    if(!e.target.classList == 'bx bx-x'){
    } e.target.parentElement.parentElement.style.display = "none"
    })
    elFg.appendChild(tmp);
  }
  elList.appendChild(elFg);
}