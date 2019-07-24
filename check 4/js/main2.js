$(document).ready(function(){
    $(".line2").mouseenter(function(){
      $(".btnStyle1").show();
    });
    $(".line2").mouseleave(function(){
        $(".btnStyle1").hide();
      });
  });



  $(document).ready(function(){
    $(".line3").mouseenter(function(){
      $(".btnStyle2").show();
    });
    $(".line3").mouseleave(function(){
        $(".btnStyle2").hide();
      });
  });



  $(document).ready(function(){
    $(".line4").mouseenter(function(){
      $(".btnStyle3").show();
    });
    $(".line4").mouseleave(function(){
        $(".btnStyle3").hide();
      });
  });



  $(document).ready(function(){
    $(".line5").mouseenter(function(){
      $(".btnStyle4").show();
    });
    $(".line5").mouseleave(function(){
        $(".btnStyle4").hide();
      });
  });



  $(document).ready(function(){
    $(".line6").mouseenter(function(){
      $(".btnStyle5").show();
    });
    $(".line6").mouseleave(function(){
        $(".btnStyle5").hide();
      });
  });



  $(document).ready(function(){
    $(".line7").mouseenter(function(){
      $(".btnStyle6").show();
    });
    $(".line7").mouseleave(function(){
        $(".btnStyle6").hide();
      });
  });


  $('#manual-ajax').click(function(event) {
    event.preventDefault();
    this.blur();
    $.get(this.href, function(html) {
      $(html).appendTo('body').modal();
    });
  });