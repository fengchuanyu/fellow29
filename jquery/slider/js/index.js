$.fn.extend({
  slider:function(obj){
    var defaultSet = {
      timer:1000,
      pic:['https://img.alicdn.com/simba/img/TB1fN3WA7CWBuNjy0FaSutUlXXa.jpg','https://img.alicdn.com/tps/i4/TB1o_JiAVOWBuNjy0FiSutFxVXa.jpg','https://img.alicdn.com/simba/img/TB114X1gBjTBKNjSZFuSuv0HFXa.jpg']
    }
    var newSet = $.extend({},defaultSet,obj);

    var content = $("<div class='slider'></div>")
    var imgBar = '<div>'+
    '<div class="slider-panner sp-1 active"><div>'+
    '<img src="'+newSet.pic[0]+'" ></div></div>'+
    '<div class="slider-panner sp-2 active"><div>'+
    '<img src="'+newSet.pic[1]+'" ></div></div>'+
    '<div class="slider-panner sp-3 active"><div>'+
    '<img src="'+newSet.pic[2]+'" ></div></div>'+
    '</div>'
    var btnBar = '<div class="list-btn"><ul>'+
      '<li class="active"></li>'+
      '<li></li>'+
      '<li></li></ul></div>';
    content.html(imgBar+btnBar);  
    $(this).append(content);

    var nowIndex = 0;
    var timer = null;
    $(".list-btn li").mouseover(function(){
      $(this).add($(".slider-panner").eq($(this).index())).addClass("active").siblings().removeClass("active");
    })
    function run(){
      timer = setInterval(function(){
        nowIndex++;
        if(nowIndex==3)nowIndex=0;
        $($(".list-btn li")).eq(nowIndex).triggerHandler("mouseover");
      },newSet.timer)
    }
    $(".slider").hover(function(){
      clearInterval(timer)
    },function(){
      run();
    })
    run();
  }
})