$(document).ready( function () {
$(".all").click(function(){
    if($(this).prop('checked')){
        $("input[type='checkbox']").css("background-position","0px 0px");
        $('.gobuy').css('background-color','red');
        $('.goodsitem').css('background','#fffbf0');
    }else{
        $("input[type='checkbox']").css("background-position","0px -24px");
        $('.gobuy').css('background-color','#ccc');
        $('.goodsitem').css('background','#fff');
        
}
})
$(".checkboxs").click(function(){
    if($(this).prop('checked')){
        $('.checkboxs').css("background-position","0px 0px");
        $('.checklist').css("background-position","0px 0px");
        $('.gobuy').css('background-color','red');
        $('.goodsitem').css('background','#fffbf0');
    }else{
       
        $('.checkboxs').css("background-position","0px -24px");
        $('.all').css("background-position","0px -24px");
        $('.checklist').css("background-position","0px -24px");
        $('.gobuy').css('background-color','#ccc');
        $('.goodsitem').css('background','#fff');
    }
$('.checkboxs').each(function(){
   for(var i=0;i<$('.checkboxs').size();i++){
       if($('.checkboxs').eq(i).prop('checked')){
        $('.all').css("background-position","0px 0px");
        $('.gobuy').css('background-color','red');
        $('.goodsitem').css('background','#fffbf0');
       }
   }
});
});

$("html").on('click','.checklist',function(){
    if($(this).prop('checked')){
        $(this).css("background-position","0px 0px");
        $('.gobuy').css('background-color','red');
        $(this).parent().parent().css('background','#fffbf0'); 
    }else{
        $('.checkboxs').css("background-position","0px -24px");
        $('.all').css("background-position","0px -24px");
        $(this).css("background-position","0px -24px");
        $('.gobuy').css('background-color','#ccc');
        $(this).parent().parent().css('background','#fff');
    }
    });
    $("html").on('click','.checklist','',function(){
        var check=$(".checklist").size();
        var checked=$(".checklist:checked").length;
        if(check==checked){
            $('.all').css("background-position","0px 0px");
            $('.checkboxs').css("background-position","0px 0px");
        }else{
            $('.all').css("background-position","0px -24px");
            $('.checkboxs').css("background-position","0px -24px");
        }
        if(checked==1){
            $('.gobuy').css('background-color','red');
        }
       
    });

//切换图片
var main=document.getElementsByClassName('newlist')[0];
console.log(main)
var lis=main.getElementsByTagName('li');
var right=document.getElementsByClassName('rightpage')[0];
var left=document.getElementsByClassName('leftpage')[0];
var yeshu=document.getElementsByClassName('yeshu')[0];
var imgw=lis[0].clientWidth+18;
var imgnum=0;
var timer2=null;
console.log(imgw)
main.scrollLeft=0;
var timer1=null;
function Move(){
    var strat=main.scrollLeft;
    var end=imgw*imgnum;
    var minStep=0;
    var maxStep=20;
    var everyStep=(end-strat)/maxStep;
    clearInterval(timer1);                                 
    timer1=setInterval(function(){
        minStep++;
        if(minStep==maxStep){
            clearInterval(timer1);
        }
        strat+=everyStep;
        main.scrollLeft=strat;
    },20)
}
right.onclick=function(){
    imgnum+=5;
    console.log(imgnum)
    Move();
    
    if(imgnum>=20){
        yeshu.innerText=4;
        imgnum=20;
    } else{
        var vv=(imgnum/5)+1;
    yeshu.innerText=vv;
    }
}
left.onclick=function(){
   
    imgnum-=5;
    Move();
    if(imgnum<=0){
        yeshu.innerHTML=1;
        imgnum=0;
    } else{
        var vv=(imgnum/5)+1;
        yeshu.innerText=vv;
    }
}

});