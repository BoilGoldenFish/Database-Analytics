window.onload = (event) => {
    localStorage.setItem("user agent", window.navigator.userAgent);
    localStorage.setItem("language", window.navigator.language);
    localStorage.setItem("allow cookies", navigator. cookieEnabled);
    localStorage.setItem("allow javascript", true);
    localStorage.setItem('screen size', [window.innerWidth, window.innerHeight]);
    localStorage.setItem('window size', [screen.availWidth, screen.availHeight]);
    localStorage.setItem('connection', navigator.connection.effectiveType);
    
    let css = document.querySelector("#checkCSS");
    if (window.getComputedStyle(css).getPropertyValue('text-transform') != 'uppercase'){
        localStorage.setItem('allow CSS', false);
    } else {
        localStorage.setItem('allow CSS', true);
    }

    let img = document.querySelector('img');
    if (img.complete == true && img.naturalHeight != 0){
        localStorage.setItem('allow img', true);
    } else {
        localStorage.setItem('allow img', false);
    }

    let perf = performance.timing;
    let start = perf.navigationStart;
    let end = perf.domComplete;

    localStorage.setItem('timing object', perf);
    localStorage.setItem('start loading', start);
    localStorage.setItem('end loading', end);
    localStorage.setItem('total loading', end-start);
};

function mouseMove(event){
    localStorage.setItem( 
        "move", [event.clientX, event.clientY])
}

function mouseClick(event) {
    localStorage.setItem( 
        "click", [event.clientX, event.clientY, event.button])
}

function mouseScroll(event){
    localStorage.setItem( 
        "scroll", [window.scrollX, window.scrollY])

}

function keyUp(event) {
    localStorage.setItem('keyup', event.keyCode)
}


function keyDown(event) {
    localStorage.setItem('keydown', event.keyCode)
}

window.addEventListener('mousemove', mouseMove);
window.addEventListener("click", mouseClick);
window.addEventListener("scroll", mouseScroll);
window.addEventListener('keyup', keyUp)
window.addEventListener('keydown', keyDown)
