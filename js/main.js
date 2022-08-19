window.document.addEventListener('DOMContentLoaded', () => {

    const bus = document.querySelector('.bus')
    const spider = document.querySelector('.spider')
    const container = document.querySelector('.container')
    const containerSecond = document.querySelector('.container-secondary')
    const containerThird = document.querySelector('.third-container')
    const loader = document.querySelector('.rainbow-loader')

    spider.style.display = 'none'
    container.style.display = 'none'
    containerSecond.style.display = 'none'
    containerThird.style.display = 'none'

    document.body.style.cssText =
    'background: url("../assets/img/Main.jpg") center; background-size:cover;'


    setTimeout(() => {
        spider.style.display = 'none'
        container.style.display = 'none'
        containerSecond.style.display = 'none'
        containerThird.style.display = 'flex'
        loader.style.display = 'none'
        document.body.style.cssText =
         'background: url("../assets/img/DBZBackground.jpg") center; background-size: cover;'
    }, 7500);
})

const soundParty = document.getElementById('party')
soundParty.volume = 0.4


setInterval(() => {
    soundParty.volume -= 0.1;
}, 1400)
