window.addEventListener('load',main);

let position = {
    top = 0
}

function main() {
    eventListeners();
}

function eventListeners() {
    document.addEventListener('keydown',jumpMan);
}

function jumpMan(event) {
    if (event.key === 'ArrowUp'){
        console.log('test');
    }
    console.log(event);
}