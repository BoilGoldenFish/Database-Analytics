window.onload = () => {
    sessionStorage.setItem("user agent", window.navigator.userAgent);
    sessionStorage.setItem("language", window.navigator.language);
    sessionStorage.setItem("allow cookies", navigator. cookieEnabled);
    sessionStorage.setItem("allow javascript", true);
    sessionStorage.setItem('screen size', [window.innerWidth, window.innerHeight]);
    sessionStorage.setItem('window size', [screen.availWidth, screen.availHeight]);
    sessionStorage.setItem('connection', navigator.connection.effectiveType);
    let day = new Date();
    sessionStorage.setItem('enter', day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds());
    

    
    let css = document.querySelector("#checkCSS");
    if (window.getComputedStyle(css).getPropertyValue('text-transform') != 'uppercase'){
        sessionStorage.setItem('allow CSS', false);
    } else {
        sessionStorage.setItem('allow CSS', true);
    }

    let img = document.querySelector('img');
    if (img.complete == true && img.naturalHeight != 0){
        sessionStorage.setItem('allow img', true);
    } else {
        sessionStorage.setItem('allow img', false);
    }


    let perf = performance.timing;
    let start = perf.navigationStart;
    let end = perf.domComplete;

    sessionStorage.setItem('timing object', perf);
    sessionStorage.setItem('start loading', start);
    sessionStorage.setItem('end loading', end);
    sessionStorage.setItem('total loading', end-start);

    sendData();

    function mouseMove(event){
        sessionStorage.setItem( 
            "move", [event.clientX, event.clientY])
        
        sendData();
    }
    
    function mouseClick(event) {
        sessionStorage.setItem( 
            "click", [event.clientX, event.clientY, event.button])
        sendData();
    }
    
    function mouseScroll(){
        sessionStorage.setItem( 
            "scroll", [window.scrollX, window.scrollY])
        sendData();
    }
    
    function keyUp(event) {
        sessionStorage.setItem('keyup', event.keyCode)
        sendData();
    }
    
    
    function keyDown(event) {
        sessionStorage.setItem('keydown', event.keyCode)
        sendData();
    }
    
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener("click", mouseClick);
    window.addEventListener("scroll", mouseScroll);
    window.addEventListener('keyup', keyUp)
    window.addEventListener('keydown', keyDown)
    
    
    let inactivityTime = function () {
        let time;
        let inactive = false;
        let period;
    
        window.onload = resetTimer;
        document.onmousemove = resetTimer;
        document.onkeypress = resetTimer;
        function timeout() {
            inactive = true;
            let day = new Date();
            sessionStorage.setItem('inactive start', day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds());
            period = Date.now();
            sendData();
        }
        function resetTimer() {
            if (inactive == true){
                inactive = false;
                sessionStorage.setItem('inactive period', Date.now()-period);
                sendData();
            }
            clearTimeout(time);
            time = setTimeout(timeout, 2000)
            
        }
    };
    inactivityTime();
    
    
    document.onvisibilitychange = function() {
        if (document.visibilityState === 'hidden') {
            let day = new Date();
            sessionStorage.setItem('left', day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds());
            sendData();
        } else if (document.visibilityState == 'visible' || document.visibilityState == 'prerender'){
            let day = new Date();
            sessionStorage.setItem('enter', day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds());
            sendData();
        }
    };
    
    
    let checkPage = function() {
        let path = window.location.pathname;
        if (path == '/') {
            sessionStorage.setItem('page', 'koimango.com');
        } else {
            sessionStorage.setItem('page', 'koimango.com'+path);
        }
        sendData()
    }
    checkPage();
    
    
    function sendData(){
        let keys = ['user agent', 'language', 'allow cookies', 'allow javascript', 
            'screen size', 'window size', 'connection', 'allow CSS', 'allow img', 'timing object', 
            'start loading', 'end loading', 'total loading', 'move', 'click', 'scroll', 'keyup', 'keydown',
            'inactive start', 'inactive period', 'left', 'enter', 'page'];
    
        let data = {};
        
        for (let i = 0; i < keys.length; i++) {
            data[keys[i]] = sessionStorage.getItem(keys[i]);
        }
        
        let text = JSON.stringify(data);
        console.log(text);
    
        fetch("https://koimango.com/json/posts", { method: 'POST', headers: { 'Content-type': 'application/json'}, body: JSON.stringify(data)});
    }

};




