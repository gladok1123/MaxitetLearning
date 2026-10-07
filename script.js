const btnAllForSite = document.getElementById('btnAllForSite')
const menuAllForSite = document.getElementById('menuAllForSite')

let hideTimer = null

btnAllForSite.addEventListener('mouseenter', () => {
    clearTimeout(hideTimer)
    const rect = btnAllForSite.getBoundingClientRect()
    menuAllForSite.style.left = rect.left + 'px'
    menuAllForSite.style.top = rect.bottom + 'px'
    menuAllForSite.style.display = 'block'
})

btnAllForSite.addEventListener('mouseleave', () => {
    hideTimer = setTimeout(() => {
        menuAllForSite.style.display = 'none'
    }, 100)
})

menuAllForSite.addEventListener('mouseenter', () => {
    clearTimeout(hideTimer)
})

menuAllForSite.addEventListener('mouseleave', () => {
    menuAllForSite.style.display = 'none'
})