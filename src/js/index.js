/**
 * Created by Administrator on 2016/10/18.
 */

(function(){
    var swiper = new Swiper(".swiper-container",{
       "direction":"vertical",
        loop:true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper);   //每个slide切换结束时也运行当前slide动画
        }
    })
    var music = document.querySelector(".music");
    var musicA = document.querySelector(".music .music-a");
    var musicC = document.querySelector(".music .music-a .music-c");
    var audio = document.querySelector(".music audio");
    music.onclick = function(){
        if(audio.paused){
            audio.play();
            musicC.style.animationPlayState = "running";
            musicA.style.background = "url('images/music.gif')";
        }else{
            audio.pause();
            musicC.style.animationPlayState = "paused";
            musicA.style.background = "none";
        }
    }
})();