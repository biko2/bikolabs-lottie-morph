$(function() {
    var direction = -1;
    var counter = 0;
    var counterMax = 30;
    var end = false;
    var idAnimationCoontainer = "logo-letra-b"
    var fontSize = 16

    var animation = bodymovin.loadAnimation({
        container: document.getElementById(idAnimationCoontainer),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'data.json'
      });
      $('#logo-letra-b').click(function(ev){
          ev.preventDefault();
        if(!end){
            animation.setDirection(direction = -direction);
            animation.play();
            counter +=1;
            $('.js-counter-text').text(counter)
                .css({fontSize:fontSize + counter});
            if(counter == 10){
                $('.js-counter-text').css({color:'orange'});
            }
            if(counter == 20){
                $('.js-counter-text').css({color:'red'});
            }
            if(counter == counterMax ){
                animation.destroy()

                animation = bodymovin.loadAnimation({
                    container: document.getElementById(idAnimationCoontainer),
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: 'shake.json'
                });
                end = true;
            }
        }
      });
        animation.addEventListener ('complete',function(frame){
            
        
      });
});