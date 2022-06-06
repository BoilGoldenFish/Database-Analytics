window.onload = () => {
    sessionStorage.setItem("userAgent", window.navigator.userAgent);
    sessionStorage.setItem("language", window.navigator.language);
    sessionStorage.setItem("allowCookies", navigator. cookieEnabled);
    sessionStorage.setItem("allowJavascript", true);
    sessionStorage.setItem('screenSize', [window.innerWidth, window.innerHeight]);
    sessionStorage.setItem('windowSize', [screen.availWidth, screen.availHeight]);
    sessionStorage.setItem('connection', navigator.connection.effectiveType);
    let day = new Date();
    sessionStorage.setItem('enter', day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds()+','+day.getDate()+'th, '+day.getMonth());
        
    let css = document.querySelector("#checkCSS");
    if (window.getComputedStyle(css).getPropertyValue('text-transform') != 'uppercase'){
        sessionStorage.setItem('allowCSS', false);
    } else {
        sessionStorage.setItem('allowCSS', true);
    }

    let img = document.querySelector('img');
    if (img.complete == true && img.naturalHeight != 0){
        sessionStorage.setItem('allowImg', true);
    } else {
        sessionStorage.setItem('allowImg', false);
    }

    function sendData(){
        let keys = ['userAgent', 'language', 'allowCookies', 'allowJavascript', 
            'screenSize', 'windowSize', 'connection', 'allowCSS', 'allowImg'];

        let data = {};
        
        for (let i = 0; i < keys.length; i++) {
            data[keys[i]] = sessionStorage.getItem(keys[i]);
        }
        
        // let text = JSON.stringify(data);
        //console.log(typeof sessionStorage.getItem('windowSize'));

        fetch("https://koimango.com/api/static", { method: 'POST', headers: { 'Content-type': 'application/json'}, body: JSON.stringify(data)});
    }

    sendData();
        


    let perf = performance.timing;
    let start = perf.navigationStart;
    let end = perf.domComplete;

    sessionStorage.setItem('timing object', perf);
    sessionStorage.setItem('startLoading', start);
    sessionStorage.setItem('endLoading', end);
    sessionStorage.setItem('totalLoading', end-start);

    sendDataD();

    function mouseMove(event){
        sessionStorage.setItem( 
            "move", [event.clientX, event.clientY])
        
        sendDataD();
    }
    
    function mouseClick(event) {
        sessionStorage.setItem( 
            "click", [event.clientX, event.clientY, event.button])
        sendDataD();
    }
    
    function mouseScroll(){
        sessionStorage.setItem( 
            "scroll", [window.scrollX, window.scrollY])
        sendDataD();
    }
    
    function keyUp(event) {
        sessionStorage.setItem('keyup', event.keyCode)
        sendDataD();
    }
    
    
    function keyDown(event) {
        sessionStorage.setItem('keydown', event.keyCode)
        sendDataD();
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
            sessionStorage.setItem('inactiveStart', day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds());
            period = Date.now();
            sendDataD();
        }
        function resetTimer() {
            if (inactive == true){
                inactive = false;
                sessionStorage.setItem('inactivePeriod', Date.now()-period);
                sendDataD();
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
            sendDataD();
        } else if (document.visibilityState == 'visible' || document.visibilityState == 'prerender'){
            let day = new Date();
            sessionStorage.setItem('enter', day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds());
            sendDataD();
        }
    };
    
    
    let checkPage = function() {
        let path = window.location.pathname;
        if (path == '/') {
            sessionStorage.setItem('page', 'koimango.com');
        } else {
            sessionStorage.setItem('page', 'koimango.com'+path);
        }
        sendDataD()
    }
    checkPage();
    
    
    
    function sendDataD(){
        let keysD = ['startLoading', 'endLoading', 'totalLoading', 'move', 'click', 'scroll', 'keyup', 'keydown',
        'inactiveStart', 'inactivePeriod', 'left', 'enter', 'page'];

        let dataD = {};

        for (let j = 0; j < keysD.length; j++) {
            dataD[keysD[j]] = sessionStorage.getItem(keysD[j]);
        }
        
        let textD = JSON.stringify(dataD);
        //console.log(typeof sessionStorage.getItem('windowSize'));
    
        fetch("https://koimango.com/api/perf", { method: 'POST', headers: { 'Content-type': 'application/json'}, body: JSON.stringify(dataD)});
    }

};






