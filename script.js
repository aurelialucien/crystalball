const box=document.querySelector('.sparkles');
for(let i=0;i<16;i++){
 const s=document.createElement('div');
 s.className='sparkle';
 s.style.left=(Math.random()*100)+'%';
 s.style.top=(Math.random()*100)+'%';
 box.appendChild(s);
}

const ball=document.getElementById('ball');
ball.addEventListener('click',()=>{
 ball.classList.add('flash');
 setTimeout(()=>ball.classList.remove('flash'),350);
});