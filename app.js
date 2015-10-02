var time = function(){
    return new Date();
};

var timer = function(){
    var event = time();
    if(event == undefined)
        console.error('Event not defined');
    else{
       console.log('Event defined'); 
    }
    setInterval(timer, 100);
};
timer();
