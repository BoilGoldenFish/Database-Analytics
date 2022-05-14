window.onload = (event) => {
    localStorage.setItem("user agent", window.navigator.userAgent);
    localStorage.setItem("language", window.navigator.language);
    localStorage.setItem("allow cookies", navigator. cookieEnabled);
    localStorage.setItem("allow javascript", true);
    
    let element = document.querySelector("#checkCSS");
    if (window.getComputedStyle(element).getPropertyValue('text-transform') != 'uppercase'){
        localStorage.setItem('allow CSS', false);
    } else {
        localStorage.setItem('allow CSS', true);
    }

    
};
