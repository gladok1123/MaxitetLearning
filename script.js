const btn = document.getElementById('btn')
const menu = document.getElementById('menu')

btn.addEventListener('mouseenter', () => {
    menu.style.display = 'block';
});

menu.addEventListener('mouseleave', () => {
    menu.style.display = 'none';
});