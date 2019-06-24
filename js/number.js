$(document).ready(function(){
    $('html').on('click','.more',function(){
        $(this).prev().val((parseInt($(this).prev().val())+1))
        var numtext=$(this).prev().val();
        var price=$(this).parent().parent().prev().children(1).children().html();
        var he=numtext*price;
        var sumrow=$(this).parent().parent().next().children().eq(0).html(he);   
        var tax=parseInt((numtext*price*0.09));
        var taxval=$(this).parent().parent().next().children().eq(1).children().eq(1).html('预估税费：￥'+tax);
        var allsum=(parseInt(tax)+parseInt(sumrow));
        allPrice();
        checkNum();

    });
    $('html').on('click','.less',function(){
        if($(this).next().val()<=1){
            $(this).next().val()==1;
            $('less').css('cursor','Move');
            alert('不能在少了')
    }else{
        $(this).next().val((parseInt($(this).next().val())-1));
        var numtext=$(this).next().val();
        var price=$(this).parent().parent().prev().children(1).children().html();
        var he=numtext*price;
        var sumrow=$(this).parent().parent().next().children().eq(0).html(he);
        var tax=parseInt((numtext*price*0.09));
        var taxval=$(this).parent().parent().next().children().eq(1).children().eq(1).html('预估税费：￥'+tax);
        var allsum=(parseInt(tax)+parseInt(sumrow));
        allPrice();
        checkNum();
       }
      
});
$('html').on("input",'.numbervalue',function(){
    var numtext=$(this).val();
    var price=$(this).parent().parent().prev().children(1).children().html();
    var he=numtext*price;
    var sumrow=$(this).parent().parent().next().children().eq(0).html(he);
    var tax=parseInt((numtext*price*0.09));
    var taxval=$(this).parent().parent().next().children().eq(1).children().eq(1).html('预估税费：￥'+tax);
    allPrice();
    checkNum();
});

function checkNum(){
    var num=0;
    $(".checklist").each(function(){
        if(this.checked==true){
            var b=$($(this).parent().next().next().next().children().children().eq(1)).val();
            num+=Number(b);
        }
    });
    $(".num").html(num);
}
function allPrice(){
    var sum=0;
    $(".checklist").each(function(){
        if(this.checked==true){
           var a=$($(this).parent().next().next().next().next().children().eq(0)).html();    //单类商品数量
//         console.log($($(this).parent().next().next().next().next().next().children().children()[0]).html());
           sum+=Number(a);
        }
    });
    $(".num1").html(sum);
}
$("html").on('click','.checklist',function(){
    allPrice();
    checkNum();
});

//全选
$("html").on('click','.all',function(){
        if(this.checked==true){
            $(".checklist").prop("checked",true);
        }else{
            $(".checklist").prop("checked",false);
        }
        allPrice();
        checkNum();
        });

//chekboxs
$("html").on('click','.checkboxs',function(){
    if(this.checked==true){
        $(".checklist").prop("checked",true);
    }else{
        $(".checklist").prop("checked",false);
    }
    allPrice();
    checkNum();
    });
//删除li

$('html').on('click','.del',function(){
    $($(this).parent().prev().prev().prev().prev().prev().parent()).remove();
    allPrice();
    checkNum();

});
//

//选中删除
$('html').on('click','.delarticle',function(){
    console.log(111)
    $('.checklist').each(function(i){
        if($(this).is(":checked")){
            $($(this).parent().parent()).remove()
        }else{
            alert('请选中在删除')
        }
        allPrice();
        checkNum();
    });
});
//移入收藏
$('html').on('click','.collect',function(){
   alert('已成功加入收藏')
});
//结算成功
$('.gobuy').click(function(){
    alert('结算成功，等待发货')
})
//数据的解析
var getLocalData = localStorage.getItem('localData'); 
    var jsonObj = JSON.parse(getLocalData);
     var results = '';
    results +=' <li class="goodsitem"><div class="vline"></div><div class="col col0"><input type="checkbox" class="checklist" ></div><div class="col col2"><a href="#" class="imgwarp"><img src="'+jsonObj.imgurl+'"/ ></a><div class="txtwrap"><h3 class="goodslt"><a href="#" title="MeadJohnson 美赞臣 荷兰版 铂睿幼儿配方奶粉（12-36月龄，3段）850/罐 原装原罐荷兰进口" class="details">'+jsonObj.name+'</a>   </h3><p class="returnitem" title="支持30天无忧退货"><img src="./images/30tian.png"/><span>支持30天无忧退货</span></p><p class="time"><span class="timedetails">限时购<i class="iconfont arr icon-arrowdown"></i><span class="layer"><b class="u-layer"><i class="bd">◆</i><i class="bg">◆</i></b><span class="layerdetails">立省<span class="layer-detail">47</span>元</span></span></span></p></div>  </div><div class="col col3"><del class="oldprice">98</del><div class="newprice"><span class="price">'+jsonObj.price+'</span></div></div><div class="col col4"><span class="setcount"><span class="less">-</span><input type="text" class="numbervalue" mix="1" max="99" value="'+jsonObj.value+'"><span class="more">+</span></span></div><div class="col col5"><span class="sumrow">'+(jsonObj.num)*(jsonObj.price)+'</span><p class="taxrow"><i class="iconfont icon-question"></i><span class="taxval">预估税费：￥<span>0</span></span></p></div><div class="col col6"><a class="del">删除</a><span class="collect">移入我的收藏</span></div></li>'
    $('.goods-ul').html(results)




});



