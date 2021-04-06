let bubble = document.querySelector('.bubble');
let moveBy = 10;

window.addEventListener('load', () => {
        bubble.style.position = 'absolue';
        bubble.style.left = 0;
        bubble.style.top = 0;
});

window.addEventListener('keyup', (e) => {
    switch(e.key){
        case 'ArrowLeft':
            bubble.style.left = parseInt(bubble.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            bubble.style.left = parseInt(bubble.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            bubble.style.top = parseInt(bubble.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            bubble.style.top = parseInt(bubble.style.top) + moveBy + 'px';
            break;
    }
});

