const btnMenu   = document.querySelector('.btn-menu')
const navMobile = document.querySelector('header nav')
const headerEl  = document.querySelector('header')

if (btnMenu && navMobile) {
    btnMenu.addEventListener('click', (e) => {
        e.stopPropagation()
        const abierto = navMobile.classList.toggle('nav-abierta')
        btnMenu.setAttribute('aria-expanded', abierto)
        document.body.classList.toggle('menu-abierto', abierto)
    })

    navMobile.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('nav-abierta')
            btnMenu.setAttribute('aria-expanded', 'false')
            document.body.classList.remove('menu-abierto')
        })
    })

    document.addEventListener('click', (e) => {
        if (headerEl && !headerEl.contains(e.target)) {
            navMobile.classList.remove('nav-abierta')
            btnMenu.setAttribute('aria-expanded', 'false')
            document.body.classList.remove('menu-abierto')
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navMobile.classList.remove('nav-abierta')
            btnMenu.setAttribute('aria-expanded', 'false')
            document.body.classList.remove('menu-abierto')
        }
    })
}
