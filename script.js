const ball=document.getElementById('ball');
const wish=document.getElementById('wish');
ball.addEventListener('click',()=>{
 ball.classList.add('flash');
 wish.classList.add('show');
 setTimeout(()=>ball.classList.remove('flash'),400);
});