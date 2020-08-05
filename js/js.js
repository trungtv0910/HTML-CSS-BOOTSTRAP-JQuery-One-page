$(document).ready(function () {
    // phần scroll
    $(window).scroll(function () { 
        var x1=$(window).scrollTop();
if(x1>50){
    $(".navbar").addClass("navbar-fixed-top");
}
else 
{
    $(".navbar").removeClass("navbar-fixed-top");
}
    });
// end phần croll 
// phần click 
var about=$("#about").offset().top;
var download=$("#download").offset().top;
var contact=$("#contact").offset().top;
$(".navbar-nav li:nth-child(1)").click(function (e) { 
    e.preventDefault();
    $("body,html").animate({scrollTop:about},1000,"easeInOutExpo")
    return false;
});
// end about 

$(".navbar-nav li:nth-child(2)").click(function (e) { 
    e.preventDefault();
    $("body,html").animate({scrollTop:download},1000,"easeInOutExpo")
    return false;
});
// end downlaod
$(".navbar-nav li:nth-child(3)").click(function (e) { 
    e.preventDefault();
    $("body,html").animate({scrollTop:contact},1000,"easeInOutExpo")
    
    return false;
});
// end contact
// nut xuống 
$(".home a.btn i").click(function (e) { 
    e.preventDefault();
    $("body,html").animate({scrollTop:about},2000,"easeInOutExpo")
    return false;
});

});