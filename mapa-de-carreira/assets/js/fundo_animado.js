const starsContainer = document.getElementById('stars');

for (let i = 0; i < 160; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size = Math.random() * 2.5 + 0.5;

    star.style.cssText = `
        width:${size}px;
        height:${size}px;
        top:${Math.random()*100}%;
        left:${Math.random()*100}%;
        animation-delay:${Math.random()*4}s;
        animation-duration:${2+Math.random()*4}s;
        opacity:${0.1+Math.random()*0.6};
    `;

    starsContainer.appendChild(star);
}

// Shooting stars
function shootingStar() {
    const el = document.createElement('div');

    el.style.cssText = `
        position:fixed;
        top:${Math.random()*40}%;
        left:${Math.random()*60+20}%;
        width:${60+Math.random()*80}px;
        height:1px;
        background:linear-gradient(90deg,rgba(255,255,255,0.8),transparent);
        transform:rotate(${20+Math.random()*20}deg);
        pointer-events:none;
        z-index:0;
        animation:shoot 0.8s ease-out forwards;
    `;

    document.body.appendChild(el);

    setTimeout(()=>el.remove(), 900);
}

const style = document.createElement('style');
style.textContent = `@keyframes shoot { from{opacity:1;transform:translateX(0) rotate(25deg)} to{opacity:0;transform:translateX(-200px) rotate(25deg)} }`;
document.head.appendChild(style);

setInterval(shootingStar, 4000);
setTimeout(shootingStar, 1500);