$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").fadeToggle("slow");
        $("#tog").show();
        $("#ocean").attr("src", "img/PCH6.jpg");
        $("#pch").text("Pacific Coast Highway: Part I");
        $("#pch2").text("Pacific Coast Highway: Part II");
});
    $("#glitch").hover(function(){
        $("#glitch").attr("src","img/glitchH.gif");
      },
        function(){
        $("#glitch").attr("src","img/glitch.png");
      });

      $("#glitchClick").hover(function(){
          $("#glitchClick").attr("src","img/glitchH.gif");
        },
          function(){
          $("#glitchClick").attr("src","img/glitch.png");
        });
});
