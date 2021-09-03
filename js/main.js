let input =document.querySelectorAll('input');
let btn =document.querySelector('button');
let div =document.querySelector('div');

let addStyle = ()=>{
w= input[0].value;
h= input[1].value;
bg= input[2].value;
div.style.width=w+"px";
div.style.height=h+"px";
div.style.backgroundColor = bg;

}
btn.addEventListener('click',addStyle);