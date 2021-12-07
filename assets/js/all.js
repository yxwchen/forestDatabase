//********** */ index首頁-特色主題 特色照片的owl 輪播jQ效果
$(".owl-carousel").owlCarousel({
autoplay:false,
autoplayhoverpause:true,
autoplaytimeout:100,
items:4,
nav:true,
loop:true,
lazyLoad:true,
margin:5,
padding:5,
stagePadding:5,
responsive:{
       0:{
        items:1,
        dots:false
    } ,
    485:{
        items:2,
        dots:false
    } ,
    728:{
        items:3,
        dots:false
    } ,
    960:{
        items:5,
        dots:false
    } 
}
});
