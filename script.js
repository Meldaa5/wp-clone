
    
  
  
  
  $(function (){


  
    $(".contact").click(function() {
      var talk = $(this).attr("data-chat");
      var talkscreen = $('.message_box[data-chat="'+talk+'"]');
      $(".message_box").removeClass("active");
      $(".contact").removeClass("active");
      talkscreen.addClass("active");
      $(this).addClass("active");
      

      
    });
  
})

let click = document.querySelector('.click');
let list = document.querySelector('.list');
click.addEventListener("click",()=>{
    list.classList.toggle('newlist');
});

      
      let click2 = document.querySelector('.clickH');
      let list2 = document.querySelector('.list2');
      click2.addEventListener("click",()=>{
          list2.classList.toggle('newlist2');
          
      });
    
    
      
