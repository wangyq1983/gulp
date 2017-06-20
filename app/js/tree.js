$(function(){
    //界面初始化
    var ui_width = document.documentElement.clientWidth;
    var ui_height = document.documentElement.clientHeight;
    var right_height=$(".m_right").height();
    $(".m_left").height(ui_height-46);
    $(".drop_box").height(ui_height-46);

    //伪select下拉菜单插件化
    $.fn.extend({
       select_show:function(col,default_val){
       var self=$(this);
           self.on("click",function(){
               $(".cphm dl").hide();
               self.find("dl").show();
               return false;
           });
           $(document).on("click",function(){
               self.find("dl").hide();
           });
           self.find("dd").on("click",function(){
               var cp_text=$(this).find(".cp").text();
               self.find("h6").text(cp_text);
               self.find("dl").hide();
               return false;
           });
       }
    });

    //车牌号码下拉框
    /*$(".cphm").on("click",function(){
        $(".cphm dl").show();
        return false;
    });
    $(document).on("click",function(){
        $(".cphm dl").hide();
    });
    $(".cphm dl dd").on("click",function(){
        var cp_text=$(this).find(".cp").text();
        $(".cphm h6").text(cp_text);
        $(".cphm dl").hide();
        return false;
    });
    */
    //drop拖动
    xx=0;
    var dragging = false;
    $(".drop_box").on("mousedown",function(e){
        dragging = true;
    });
    $(document).on("mousemove",function(e){
        if(dragging){
            xx=e.pageX;
            if(xx>360){
                $(".drop_box").css("left",xx);
            }
            else{
                $(".drop_box").css("left","360px");
            }

        }
    });
    $(document).on("mouseup",function(e){
        dragging=false;
        var ml_px=xx+9;
        $(".m_left").width(xx);
        $(".m_right").css("marginLeft",ml_px);
        if(xx<360){
            $(".m_left").width(360);
            $(".m_right").css("marginLeft","369px");
        }
    });

    //列表隔行换色
    $(".ssxx_con ul li:even").css("background","#f9f3e8");

    //树形菜单
    $(".minus").parent().parent().find("ul:first").show();
    $(".plus").parent().parent().find("ul:first").hide();
    $(".tree_action").each(function(index){
        if($(this).parent().parent().find("ul").length==0){
            $(this).removeClass("plus").removeClass("minus");
        }
    });
    $(".tree_action").on("click",function(){
        if($(this).hasClass("minus")){
            $(this).removeClass("minus").addClass("plus");
            $(this).parent().parent().find("ul:first").hide();
        }
        else if($(this).hasClass("plus")){
            $(this).removeClass("plus").addClass("minus");
            $(this).parent().parent().find("ul:first").show();
        }
    });

    //复选框选择
    $("input[name='name1']").on("change",function(){
        if($(this).prop("checked")==true){
            $(this).parent().parent().find("input[name='name1']").prop("checked",true);
        }
        else if($(this).prop("checked")==false){
            $(this).parent().parent().find("input[name='name1']").prop("checked",false);
        }
    });

    //列表tab切换
    $(".info_title ul li").on("click",function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        var index=$(this).index();
        $(".xuanze_div").eq(index).show().siblings().hide();
    });

    //地图以及图表双击收缩放大
    $(".baidu_map").on("dblclick",function(){
        console.log($(this).height());
        if($(this).height()>200){
            $(this).height(200);
        }
        else{
            $(this).height(400);
        }
    });

    //顶部选项切换
    $(".sjly").on("click",function(){
        $(".sjly").addClass("s_no");
        $(this).addClass("s_cur").removeClass("s_no");
    });
    $(".jldw").on("click",function(){
        $(".jldw").addClass("dw_no");
        $(this).addClass("dw_cur").removeClass("dw_no");
    })

    //油耗统计跟随层
    $(".yhtj").mousemove(function (e) {
        var x;
        var y;
        $("#mousePosition").show();
        //var xy="<br>x坐标:"+e.pageX+"，y坐标："+e.pageY;
        var xy="2016-06-11 11:24:00<br>"+"油量：385.02升<br>"+"速度：34公里/小时";
        x=e.pageX;
        y=e.pageY;
        document .getElementById("mousePosition").style.left = x + "px";
        document .getElementById("mousePosition").style.top = y + "px";
        $("#mousePosition").html(xy);
    });
    $(".yhtj").mouseleave(function () {
        $("#mousePosition").hide();
    });

    //全选checbox
    $("#all_select").on("change",function(){
        if($(this).prop("checked")==true){
            $("input[name='baojing']").prop("checked",true);
        }
        else{
            $("input[name='baojing']").prop("checked",false);
        }
    });
    $("#baojing_all").on("change",function(){
        if($(this).prop("checked")==true){
            $("input[name='baojing_item']").prop("checked",true);
        }
        else{
            $("input[name='baojing_item']").prop("checked",false);
        }
    });
    //里程修正
    $("#lcxzbl").on("change",function(){
        if($(this).prop("checked")==true){
            $(".bfb").show();
        }
        else{
            $(".bfb").hide();
        }
    });
    //图标切换
    $(".tbqh").on("click",function(){
        if($(".tb_img").is(':hidden')){
            $(".tb_img").show();
            $(".tb_list").hide();
        }
        else{
            $(".tb_img").hide();
            $(".tb_list").show();
        }
    });

    //用户界面相关交互
    $(".u_manage ul li").on("click",function(){
        $(".u_manage ul li").removeClass("cur");
        $(this).addClass("cur");
    });

    $(".car_manage a").on("click",function(){
        $(".car_manage span").removeClass("cur1");
        $(this).parent().addClass("cur1");
    });
    $(".u_manage h4 em").on("click",function(){
        if($(this).hasClass("jia")){
            $(this).removeClass("jia").addClass("jian");
            $(this).parent().parent().find("ul:first").show();
        }
        else if($(this).hasClass("jian")){
            $(this).removeClass("jian").addClass("jia");
            $(this).parent().parent().find("ul:first").hide();
        }
    });

});
