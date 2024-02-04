let textdate=document.querySelector('#date')
let texttime=document.querySelector('#time')
let date= new Date();
let h,m,s;
let day,mounth,year;

const mounths=['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentyabr','Oktyabr','Noyabr','Dekabr']

setInterval(()=>{
    date= new Date();
    h=date.getHours()<10 ? '0' + date.getHours() : date.getHours();
    m=date.getMinutes()<10 ? '0'+ date.getMinutes() : date.getMinutes();
    s=date.getSeconds()<10 ? '0' + date.getSeconds() : date.getSeconds();
    day=date.getDate()<10 ? '0' + date.getDate() : date.getDate();
    mounth=date.getMonth();
    year=date.getFullYear();
    textdate.textContent=`${day}-${mounths[mounth]},${year}`
    texttime.textContent=`${h}:${m}:${s}`

},1000)
