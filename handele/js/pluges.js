$(Document).ready(function()
{ 
    
    $("header .fa").click(function(){
        $(".ul-list").slideToggle();
    });
    /*start navbar stocky*/
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 100){
            $("header").addClass("sticky");
        }else{
            $("header").removeClass("sticky");
     
        }
        /*start counter 3ad el2rqam*/
                 if(sc > 1950){
           $('.timer').countTo();
            $(window).off("scroll");

        }

    });
    
    $(".Departments .chosse").click(function(){
        $(".about-us .Departments ul").slideToggle(1000);
           
        });
    /* slider of department*/
    $(".about-us .Departments ul li").click(function(){
        $(this).next(".content").slideToggle();
    });
     
    
    /*our team*/
    /*
    $(".our-team .team-imgs img").hover(function(){
        $(".our-team .driv-of-doc").slideToggle(1000).css("bottom","0px"),
            function(){
             $(".our-team .driv-of-doc").slideToggle(1000).css("bottom","-110px")
        }
    })
    
    */
     
    

    
    /*
    $(".team-imgs img").mouseenter(function(){
        
        $(".driv-of-doc").slideToggle(1000).css("bottom","0px");

    })
    */
    
    
    
    $(".social").click(function(){
        $(".social-ccontent").slideToggle();
    })

          /*start portofolio*/
        $(".portfolio .buttons button").click(function(){
           $(this).addClass("vbn")
        });
        
        
         /*end portofolio*/
    
    /*owl carsol*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    
/* choose*/    
    $(".choose li").click(function(){
        $(this).addClass("li-bg").siblings().removeClass("li-bg");
      var p = $(this).data("role");
        $(".content > div").hide();
        $(".content").contents().filter("#" + p).slideDown(1000);
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
});