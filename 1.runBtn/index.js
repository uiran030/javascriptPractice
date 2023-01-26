const btn = document.querySelector('.btn');
console.log('btn', btn);

let x = 0
let y = 0

function move(){
  x = Math.floor(Math.random() * 1000) + 1;
  y = Math.floor(Math.random() * 1000) + 1;
  console.log('x',x, 'y', y);
  btn.style.top = x+'px';
  btn.style.left = y+'px';
}

btn.addEventListener('mouseover', move);

btn.addEventListener('click', function(){
  alert('잡았다')
})