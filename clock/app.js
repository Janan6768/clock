const hour = document.querySelector('#hour .value');
const mint = document.querySelector('#mint .value');
const sec = document.querySelector('#sec .value');
const date = document.getElementById('date')

window.addEventListener('load', () => {

    setInterval(()=> {
    const now = new Date();

    let h = now.getHours();
    
    if(h > 12){
        h = h-12
        hour.textContent = String(h).padStart(2, '0'    );
    }

    let m = now.getMinutes();
    mint.textContent = String(m).padStart(2, '0');

    let s = now.getSeconds();
    sec.textContent = String(s).padStart(2, '0');

    //Yae Date,Month or Year k leay START
    let d = now.getDate();
    let mo = now.getMonth();
    let y = now.getFullYear();
    date.innerText = `${d}-${mo}-${y}`;
    date.style.color = 'gray';
    //Yae Date,Month or Year k leay END
        
    },1000)
})


