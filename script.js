const sparkleContainer=document.querySelector(".sparkles");
for(let i=0;i<20;i++){
  const s=document.createElement("div");
  s.classList.add("sparkle");
  s.style.width=`${Math.random()*6+2}px`;
  s.style.height=s.style.width;
  s.style.left=`${Math.random()*100}%`;
  s.style.top=`${Math.random()*100}%`;
  s.style.animationDelay=`${Math.random()*2}s`;
  sparkleContainer.appendChild(s);
}
