$(function () {
    document.documentElement.clientWidth;
    var n = document.documentElement.clientHeight;
    $(".m_right").height();
    $(".m_left").height(n - 46), $(".drop_box").height(n - 46), $.fn.extend({
        select_show: function (n, e) {
            var i = $(this);
            i.on("click", function () {
                return $(".cphm dl").hide(), i.find("dl").show(), !1
            }), $(document).on("click", function () {
                i.find("dl").hide()
            }), i.find("dd").on("click", function () {
                var n = $(this).find(".cp").text();
                return i.find("h6").text(n), i.find("dl").hide(), !1
            })
        }
    }), xx = 0;
    var e = !1;
    $(".drop_box").on("mousedown", function (n) {
        e = !0
    }), $(document).on("mousemove", function (n) {
        e && (xx = n.pageX, xx > 360 ? $(".drop_box").css("left", xx) : $(".drop_box").css("left", "360px"))
    }), $(document).on("mouseup", function (n) {
        e = !1;
        var i = xx + 9;
        $(".m_left").width(xx), $(".m_right").css("marginLeft", i), xx < 360 && ($(".m_left").width(360), $(".m_right").css("marginLeft", "369px"))
    }), $(".ssxx_con ul li:even").css("background", "#f9f3e8"), $(".minus").parent().parent().find("ul:first").show(), $(".plus").parent().parent().find("ul:first").hide(), $(".tree_action").each(function (n) {
        0 == $(this).parent().parent().find("ul").length && $(this).removeClass("plus").removeClass("minus")
    }), $(".tree_action").on("click", function () {
        $(this).hasClass("minus") ? ($(this).removeClass("minus").addClass("plus"), $(this).parent().parent().find("ul:first").hide()) : $(this).hasClass("plus") && ($(this).removeClass("plus").addClass("minus"), $(this).parent().parent().find("ul:first").show())
    }), $("input[name='name1']").on("change", function () {
        1 == $(this).prop("checked") ? $(this).parent().parent().find("input[name='name1']").prop("checked", !0) : 0 == $(this).prop("checked") && $(this).parent().parent().find("input[name='name1']").prop("checked", !1)
    }), $(".info_title ul li").on("click", function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        var n = $(this).index();
        $(".xuanze_div").eq(n).show().siblings().hide()
    }), $(".baidu_map").on("dblclick", function () {
        console.log($(this).height()), $(this).height() > 200 ? $(this).height(200) : $(this).height(400)
    }), $(".sjly").on("click", function () {
        $(".sjly").addClass("s_no"), $(this).addClass("s_cur").removeClass("s_no")
    }), $(".jldw").on("click", function () {
        $(".jldw").addClass("dw_no"), $(this).addClass("dw_cur").removeClass("dw_no")
    }), $(".yhtj").mousemove(function (n) {
        var e, i;
        $("#mousePosition").show();
        e = n.pageX, i = n.pageY, document.getElementById("mousePosition").style.left = e + "px", document.getElementById("mousePosition").style.top = i + "px", $("#mousePosition").html("2016-06-11 11:24:00<br>油量：385.02升<br>速度：34公里/小时")
    }), $(".yhtj").mouseleave(function () {
        $("#mousePosition").hide()
    }), $("#all_select").on("change", function () {
        1 == $(this).prop("checked") ? $("input[name='baojing']").prop("checked", !0) : $("input[name='baojing']").prop("checked", !1)
    }), $("#baojing_all").on("change", function () {
        1 == $(this).prop("checked") ? $("input[name='baojing_item']").prop("checked", !0) : $("input[name='baojing_item']").prop("checked", !1)
    }), $("#lcxzbl").on("change", function () {
        1 == $(this).prop("checked") ? $(".bfb").show() : $(".bfb").hide()
    }), $(".tbqh").on("click", function () {
        $(".tb_img").is(":hidden") ? ($(".tb_img").show(), $(".tb_list").hide()) : ($(".tb_img").hide(), $(".tb_list").show())
    }), $(".u_manage ul li").on("click", function () {
        $(".u_manage ul li").removeClass("cur"), $(this).addClass("cur")
    }), $(".car_manage a").on("click", function () {
        $(".car_manage span").removeClass("cur1"), $(this).parent().addClass("cur1")
    }), $(".u_manage h4 em").on("click", function () {
        $(this).hasClass("jia") ? ($(this).removeClass("jia").addClass("jian"), $(this).parent().parent().find("ul:first").show()) : $(this).hasClass("jian") && ($(this).removeClass("jian").addClass("jia"), $(this).parent().parent().find("ul:first").hide())
    })
});