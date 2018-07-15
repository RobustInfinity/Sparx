$('body').on('mousewheel', function(e){
    if(e.originalEvent.wheelDelta > 0) {
        console.log(e.originalEvent.wheelDelta);
        document.querySelector('#nav').classList.add('active')
        document.querySelector('#nav').classList.remove('fade')
        
    }
    if( e.originalEvent.wheelDelta < 0 && window.scrollY > 90) {
        console.log(e.originalEvent.wheelDelta);
        document.querySelector('#nav').classList.remove('active')
        document.querySelector('#nav').classList.add('fade')
    }
    // console.log(document.body.scrollTop)
    // console.log(document.body.scrollHeight)
    console.log(window.scrollY)
});