
let e=100;
setInterval(()=>{
  document.querySelectorAll("*").forEach(d=>d.style.transform=`scale(${e+=1}%,${e}%)`)}
            if(e>250) e=100;
            ,100)

