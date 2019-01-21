# H5个人简历模板
##### 简介:
1. 代码使用HTML5,CSS3,jQuery编辑,主要使用CSS3动画完成
2. 编写时间2015年12月

![](https://www.showdoc.cc/server/api/common/visitfile/sign/594c25b7c74ed87e82199d9f705ffd7c?showdoc=.jpg)![](https://www.showdoc.cc/server/api/common/visitfile/sign/3cfc1dc01e4b44c80add7c502e45a645?showdoc=.jpg)

##### 1.适配768px Pad以上屏幕,编辑环境尺寸为iPhone 6分辨率
```css
@media screen and (min-width:768px){
    #wrap{display:none;}
    body:after{
        content:"暂未开放平板PC版本，请于手机端查看";
        color：#000;
        font-family: "娃娃字";
        font-size: 40px;
        display:block;
        margin:20% 20% 0 20% ;
    }
}
```

##### 2.音乐播放为用户触摸欺骗
```javascript
//触摸播放；
$("body").on("touchstart",function(){
	if(TouchNum==2){
		var bgm = document.querySelector("audio#bgm");
		bgm.play();
	}
})
```
