
var nav = $(".side_nav li");                             

var contents = $("#container > div");          




$(window).scroll(function(){

    var wScroll = $(this).scrollTop();



 

    if(wScroll >= contents.eq(0).offset().top){




      $(".side_nav li ").eq(0).css('background', 'red');



      $(".side_nav li a").not(".side_nav li a:eq(0)").css('color', 'white');



    }



 



    if(wScroll >= contents.eq(1).offset().top){






      $(".side_nav li a").eq(1).css('color', 'red');



      $(".side_nav li a").not(".side_nav li a:eq(1)").css('color', 'white');



 



    }



 



    if(wScroll >= contents.eq(2).offset().top){





      $(".side_nav li a").eq(2).css('color', 'red');



      $(".side_nav li a").not(".side_nav li a:eq(2)").css('color', 'white');



    }









    if(wScroll >= contents.eq(3).offset().top){





      

      $(".side_nav li a").eq(3).css('color', 'red');



      $(".side_nav li a").not(".side_nav li a:eq(3)").css('color', 'white');

 

    }



 

    if(wScroll >= contents.eq(4).offset().top){






      $(".side_nav li a").eq(4).css('color', 'red');



      $(".side_nav li a").not(".side_nav li a:eq(4)").css('color', 'white');

 

    }








  });
