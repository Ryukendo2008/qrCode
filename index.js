let input=document.getElementById('input');
let img=document.getElementById('img');
let btn=document.getElementById('btn');

btn.addEventListener('click', ()=>{
    QRCode.toDataURL(input.value).then(du=>{
        img.src=(du);
    });
});