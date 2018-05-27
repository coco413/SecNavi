$(document).ready(function(){
    // 数据遍历
    var oNavs = "";
    var oFronts = "";

    var nav_lists;
    var oBject;
    for(sum1 in FrontGuide['main']){
        oBject = FrontGuide['main'][sum1];
        var oPageT1 = oBject['pageT1'];
        nav_lists = '<a href="#page_' + sum1 + '" class="nav_list"><li>' + oPageT1 + '</li></a>';
        oNavs+= nav_lists;

        var pageC1 = oBject['pageC1'];

        oFronts += '<div id="_page_' + sum1 + '" class="content_list"><div class="content_list_title">' + oPageT1 + '</div><div class="content_list_main"><div class="main_classify">';
        for(sum2 in pageC1){
            var oPage2 = pageC1[sum2];
            var oPageT2 = oPage2['pageT2'];
            // console.log(oPageT2);
            // console.log(sum2);
            var pageC2 = oPage2['pageC2'];

            oFronts += '<div class="main_classify_name">' + oPageT2 + '</div><div class="main_classify_war">';
            for(sum3 in pageC2){
                var oPage3 = pageC2[sum3];
                var oNames = oPage3['Name'];
                var oTitles = oPage3['Title'];
                var oHrefs = oPage3['Href'];
                var oNews = oPage3['New'];
                var nNt = "";
                if(oNews == 1){
                    nNt = '<i class="Icon-New">NEW</i>';
                }
                // console.log(oNames);
                // console.log(oTitles);
                // 
                oFronts += '<a title="' + oTitles + '" href="' + oHrefs + '" target="_blank"><div class="main_classify_list">' + oNames + '</div></a>' + nNt;
            }
            oFronts += "</div>";
        }
        oFronts += "</div></div></div>";
    }
    // #nav
    oNavs = '<ul id="nav_ul" class="nav_ul">' + oNavs + '</ul>';
    oFronts = '<div id="content_war" class="content_war war">' + oFronts + '</div>';
    // console.log(oFronts);

    document.getElementById("nav").innerHTML = oNavs;
    document.getElementById("content").innerHTML = oFronts;
    
//  window.onload=function(){
//      var hrefId='_'+location.href.split('#')[1];
//      //alert(hrefId);
//      var hrefHeight=document.getElementById(hrefId).offsetTop;
//      $("html, body").animate({"scroll-top": hrefHeight-70},600,'easeInOutQuint');
//  };
    
    //返回顶部
    $(document).on('click','#backTop',function(){
        $("html, body").animate({"scroll-top":0},600,'easeInOutQuint');
    });
    
    //页面滚动到距顶部600px出现/消失返回顶部按钮
    $(window).scroll(function(){
        var targetTop = $(this).scrollTop();

        if(targetTop > 600){
            $('#backTop').animate({'right':'0'},200);
        }else if(targetTop <= 600){
            $('#backTop').stop();
            $('#backTop').animate({'right':'-40px'},200);
        }
    });
    
    //顶端导航跳转
    $(document).on('click','.nav_list',function(){
        var targetId='_'+$(this).attr('href').substr(1);
        var targetHeight=document.getElementById(targetId).offsetTop;
        $("html, body").animate({"scroll-top": targetHeight-70},600,'easeInOutQuint');
        
//      $('.nav_list li').css('color','#fff');
//      $(this).find('li').css('color','#22F2C8');
    });
    
    //刷新页面跳转
    var hrefId='_'+location.href.split('#')[1];
    //alert(hrefId);
    if(location.href.split('#')[1]){
        var hrefHeight=document.getElementById(hrefId).offsetTop;
        $("html, body").animate({"scroll-top": hrefHeight-70},600,'easeInOutQuint');
    }
});
//a标签title提示
$(function() {
    $("a[title]").each(function() {
        var a = $(this);
        var title = a.attr('title');
        if (title == undefined || title == "") return;
        a.data('title', title).removeAttr('title').hover(

        function() {
            var offset = a.offset();
            $("<div id=\"TitleTip\"></div>").appendTo($("body")).html(title).css({
                top: offset.top + a.outerHeight() + 10,
                left: offset.left + a.outerWidth()/2 + 1
            }).fadeIn(function() {
                var pop = $(this);
                setTimeout(function() {
                    pop.remove();
                }, pop.text().length * 800);
            });
        }, function() {
            $("#TitleTip").remove();
        });
    });
});
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    });
// Search

// description: 新导航
// date: 2015-10-21
// header.v1.css
// update:3
$(function() {
    // 搜索输入隐藏下拉菜单
$(".search-val").keydown(function(){
    $('.search-select ul').hide();
});
    //滑过导航显示子导航
$(".nav-hd li").hover( function () {
$(this).find("a").addClass("on");
    $(this).find(".subnav-hd").show();
 },
 function () {
$(this).find("a").removeClass("on");
    $(this).find(".subnav-hd").hide();
 } );

    $('#quickTab .tab-wrap').find('a').each(function(){
                var tmpurl=$(this).attr('href') +'&random='+ Math.random();
                $(this).attr('href',tmpurl);
    });
    //点击去动态消息提示;
    // $('#quickTab ul li').click(function(){

    //  var weizhi = String($(this).index())+',';

    //  var span = $(this).find('span');
    //  var bellspan = $('.icon-bell').nextAll('span');
    //  if(span.length==1){
    //      var cat = $(this).attr('rel');
    //      var bellnum = bellspan.text();
    //          bellnum =parseInt(bellnum);
    //      var yidu=0;
    //      var data ={
    //                  uid:navuid,
    //                  cat:cat
    //                  };

    //      var host = window.location.host;
    //      if(host=='www.ui.cn'){
    //          $.ajax({
 //                    type:'get',
 //                    dataType:'json',
 //                    url:'/delnotice',
 //                    data:data,
 //                    success:function(data){
 //                        if ( data.state == true ) {
 //                         span.remove();
 //                         yidu = data.yiread;
 //                         bellnum = bellnum - yidu;
 //                         if(bellnum>0){
 //                             bellspan.text(bellnum);
 //                         }else{
 //                             bellspan.prevAll('.icon-bell').css('color','#CED7DE')
 //                             bellspan.remove();
 //                         }
 //                         nav_loc = nav_loc.replace(weizhi,'');
 //                        }else{
 //                        }
 //                    },
 //                    error:function(){
 //                    }
    //                 });
    //      }else if(host.indexOf('ui.cn')){
    //          $.ajax({
 //                    type:'post',
 //                    dataType:'jsonp',
 //                    url:'http://www.ui.cn/delnotice',
 //                    data:data,
 //                    jsonpCallback:'DFEDFE',
 //                    success:function(data){
 //                        if ( data.state == true ) {
 //                         span.remove();
 //                         yidu = data.yiread;
 //                         bellnum = bellnum - yidu;
 //                         if(bellnum>0){
 //                             bellspan.text(bellnum);
 //                         }else{
 //                             bellspan.prevAll('.icon-bell').css('color','#CED7DE')
 //                             bellspan.remove();
 //                         }
 //                         nav_loc = nav_loc.replace(weizhi,'');
 //                        }else{
 //                        }
 //                    },
 //                    error:function(){
 //                    }
    //                 });
    //      }

    //  }

    // });
//兼容个人中心,立即激活的样式。
$(".jsemailverify").parent('div').parent('li').css("background","#fff7e7").find('a').addClass('f14').css('display','block');

$(".quick-item").hover( function () {
    $(this).addClass('on');
        $(this).find('.quick-menu').show();
 },
 function () {
$(this).removeClass('on');
        $(this).find('.quick-menu').hide();
 } );


    $(".quick-item").mouseenter(function(){
        if($(this).find('.quick-menu').attr('id')=='quickTab' && nav_loc.length>0){
            var navi = nav_loc.substr(0,1); // 获取第一个展开S
            navi = parseInt(navi);
            tabNav.eq(navi).trigger('click');//默认有动态 展开项
        }
    });




    // 消息选项卡
    $(".quick-tab .tab-wrap .tab-cont").hide();
    $(".quick-tab .tab-wrap .tab-cont").eq(0).show();
    $(".quick-tab .tab-bar li").eq(0).addClass('on');

    var tabNav = $(".quick-tab .tab-bar li");
    tabNav.click(function(){
        var index = $(".quick-tab .tab-bar li").index(this);  //获取当前点击li的索引值

        tabNav.removeClass('on');
        tabNav.eq(index).addClass('on');
        $(".quick-tab .tab-wrap ul").hide();
        $(".quick-tab .tab-wrap ul").eq(index).show();
    });
$(".search-hd-btn").click(function(ev){
      var ev = ev || event, // enent做兼容
            isTrue = $(".search-hd").is(".on"); // 判断.search-hd是否是展开状态
      ev.stopPropagation(); // 阻止冒泡
      if($(".search-hd").addClass('on').find('input').val() == ""){ // 在输入框没有文字时执行
            if(isTrue){ // isTrue等于 true 移除on，false就添加on
                $(".search-hd").removeClass('on').find('input').blur();
                $('.search-select ul').hide();
            }else{
                $(".search-hd").addClass('on').find('input').focus();
            }
      }else{ //提交事件search-hd
        $(".search-hd").find('input').focus();
        if(isTrue){
            $("#searchForm").submit();
        }else{

        }
      }
  })
$(".search-filter").click(function(ev){
     ev.stopPropagation();
})
$(document).click(function(){
    $(".search-hd").removeClass('on').find('input').blur();
});
    //回车提交
    $(document).on("keydown","#keywords",function(e){
        var keyVal = $(this).val();
        var keyCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
        if(keyVal=='' && keyCode==13){
            e.preventDefault();
        }
    })

    // 搜索分类
    $(".search-filter").hover(function(){
        $(this).find('ul').show();
    },function(){
        $(this).find('ul').hide();
    })
    // selectBoxSer (".search-filter");
    $(".search-filter ul a").click(function(){
        var textVal = $(this).text();
        var tVal = $(this).attr("data-rel");
        $(".search-filter ul li").removeClass("on");
        $(this).parent().addClass("on");
        $("#sType").val(tVal);
        $(this).parents(".search-filter").find(".tit").text(textVal);
        $(this).parents(".search-filter").find(".options").hide();
        return false;
    });

    // 搜索提示
    selectBoxSer (".search-select");
    $(".search-select ul a").click(function(){
        var textVal = $(this).text();
        $(".search-val").val(textVal);
        $(this).parents(".search-select").find(".options").hide();
        // $(".search-hd").find('input').focus();搜索下拉选择后获取焦点
        return false;
    });

});
// 搜索选项下拉
selectBoxSer = function(box){
    $(box).click(function(){
        var $this = $(this);
        $this.blur();
        var options = $this.find('.options').css('display');

    if( options == 'none' && $(".search-val[type=text]").val()=="" ){   //
        $this.find(".options").show();

    } else {
        $this.find(".options").hide();
    }
    /*点击任何地方关闭层*/
    $(document).click(function(event){
        var tar = $(event.target).attr("class");
        if( tar != $this ){
            $this.find(".options").hide();
        }
    });
    return false;

});
};
// 百度搜索
function s4() {
    var v = f.k.value
    window.open("http://www.baidu.com/s?wd=" + v, "7");
    return false;
}
