function _page(){
        var _dw = document.documentElement.clientWidth;
        _sc = _dw/640;
        document.body.style.zoom = _sc;
    }
    window.onresize = function(){
        _page();
    }
    window.onload = function(){
        _page();
    $("#bgm-play").css("display","block"); }
