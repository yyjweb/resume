    $(document).ready(function() {
    	var TouchNum = 1;
    	TouchNum++;
    	console.log(TouchNum);
    	//触摸播放；
		$("body").on("touchstart",function(){
			if(TouchNum==2){
				var bgm = document.querySelector("audio#bgm");
				bgm.play();
			}
			
		})
        function BgmPlay(){
            var i=0;
            var bgm = document.querySelector("audio#bgm");
            $("#bgm-play").click(function(){
                i++;
                if (i%2==0)
                {
                    bgm.play();
                    $("#bgm-play").css("animation-play-state","running");
                }
                else{
                    bgm.pause();
                    $("#bgm-play").css("animation-play-state","paused");
                }
                console.log(i);
            })
        }
        BgmPlay();
        var a= 1;
       
        
        $(".next").click(function(){
            a++;
            if (a==2) {
                $(".con1").addClass('zoomOutUp');
                $(".con2 *").addClass('animated');
                $(".con2").addClass('block').removeClass('zoomOutUp').removeClass('hide');
            };
            if (a==3) {
                $(".con2").addClass('zoomOutUp').addClass('animated');
                $(".con3 *").addClass('animated');
                $(".con3").addClass('block').removeClass('zoomOutUp').removeClass('hide');
            };
            if (a==4) {
                $(".con3").addClass('zoomOutUp');
                $(".con4 *").addClass('animated');
                $(".con4").addClass('block').removeClass('zoomOutUp').removeClass('hide');
            };
            if (a==5) {
                $(".con4").addClass('zoomOutUp');
                $(".con5 *").addClass('animated');
                $(".con5").addClass('block').removeClass('zoomOutUp').removeClass('hide');
            };
            if (a==6) {
                $(".con5").addClass('zoomOutUp');
                $(".con6 *").addClass('animated');
                $(".con6").addClass('block').removeClass('zoomOutUp').removeClass('hide');
                $(".con1").addClass('hide');
            };
            if (a==7) {
                $(".con6").addClass('zoomOutUp');
                $(".con1 *").addClass('animated');
                $("#wrap>div").addClass('hide');
                $(".con1").removeClass('zoomOutUp').removeClass('hide').addClass('block');
                console.log("最后");
                a=1;
            };
        })
    });
    