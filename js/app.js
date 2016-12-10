$(document).ready(function() {
  var counter= 0;
  var apples=0;
  var pears=0;
  var fish=0;
  $(".stuff").click(function() {
    if(counter>=20){
      counter=counter-20;
      apples++;
      $(".num").html(counter+" cookies")
    }
    else if(counter<20){
      alert("not enough cookies you need "+(20-counter)+" more cookies");
    }
  });
  $(".mega").click(function() {
    if(counter<100){
      alert("not enough cookies "+(100-counter)+" more cookies");
    }
    else if(counter>=100){
      counter=counter-100;
      pears++;
      $(".num").html(counter+" cookies")
    }
  });

  $("img").click(function() {
    counter=counter+apples*2+pears*5+1;
    $(".num").html(counter+" cookies")
    if(counter>1000){
      $(".stat").html("god like");
      $(".coin").fadeIn('1000000', function() {
        $(".coin").attr('src', 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Dog-bite-prevention.jpg?itok=3N2KTNkP');
      });
    }
    else if(100>counter){
      $(".stat").html("noob");
    }
    else if(100<counter){
      $(".stat").html("wow such amaze");
      $(".coin").fadeIn('500', function() {

      });
    }

  });
  $("h1").click(function() {
    counter=0;
    $(".num").html(counter+" cookies")
  });

});
