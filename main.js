const squere = document.createElement('div')
document.body.appendChild(squere)
squere.style.backgroundColor = 'green';
document.body.style.margin = '0px'
let grow = true
let size = 10
squere.style.height = size + 'px';

const scrollFun = () => {

    if (size >= window.innerWidth / 4) {
        grow = false
    } else if (size <= 10) {
        grow = true
    }

    if (grow === true) {
        size += 5;
        squere.style.height = size + 'px';
    } else if (grow === false) {
        size -= 5;
        squere.style.height = size + 'px';
    }

}







window.addEventListener('scroll', scrollFun)


