const squere = document.createElement('div')
document.body.appendChild(squere)
let size = 100;
let grow = true
squere.style.width = size + 'px'
squere.style.height = size + 'px'
squere.style.backgroundColor = 'yellowgreen'

const sizeChange = () => {

    if (size >= window.innerWidth / 4) {
        grow = false
    } else if (size <= 0) {
        grow = true
    }

    if (grow == true) {
        size += 8
        squere.style.width = size + 'px'
        squere.style.height = size + 'px'
    } else {
        size -= 8
        squere.style.width = size + 'px'
        squere.style.height = size + 'px'
    }
}

window.addEventListener('scroll', sizeChange)
