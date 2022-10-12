

$(function(){
   $('.mainmenu>li').hover(function(){
       $(this).find('.submenu>li').stop().slideDown();
   },function(){
       $('.submenu>li').stop().slideUp();
   }); 
    
    
    
});