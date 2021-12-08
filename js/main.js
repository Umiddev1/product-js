let elBtnGroup = document.querySelectorAll('.product__btn');
let elTemplate = document.querySelector('#tempproduct').content;
let elFg = document.createDocumentFragment();
let elList = document.querySelector('.product__result-list');
let elSpan = document.querySelector('.span');
let elSpanSec = document.querySelector('.spansec');
let elSpanFin = document.querySelector('.spanfinaly');
let sum = 0;
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
    let pr =  arr[template].querySelector('.price').textContent;
    let calc =  sum += Number(pr)
    let tax = calc * 0.13;
    let total = calc + tax
    elSpan.innerHTML =  "$" +  calc.toFixed(2);
    elSpanSec.innerHTML = "$" + tax.toFixed(2);
    elSpanFin.innerHTML = "$" + total.toFixed(2);
    tmp.querySelector('.result__closes').addEventListener("click", function(e){
    if(!e.target.classList == 'bx bx-x'){
    } 
      let li =  e.target.parentElement.parentElement
      elList.removeChild(li);
    })
    elFg.appendChild(tmp);
  }
  elList.appendChild(elFg);
}