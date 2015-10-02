var time = function(){
    return new Date();
};

var timer = function(){
        var event = time();
        if(event == undefined)
            console.error('Log not defined');
    console.log('hola');
    setInterval(timer, 100);
};
timer();