// mobile nav
const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (btn) btn.addEventListener('click', () => nav.classList.toggle('show'));

// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); nav.classList.remove('show'); }
    })
});
