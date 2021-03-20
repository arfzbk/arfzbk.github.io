
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();  
    $(window).scroll(function(){
      var heights=$('.carousel-item').height();
      if(this.scrollY>heights){
        $('.navbar').addClass("bg-light");
        $('#index-nav>.navbar-brand').css('cssText','color:#383838 !important');
        $('.dropdown-menu').css('background-color','#f8f8f8');
        $('.navbar').css('box-shadow','rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px');
      }
      else{
        $('.navbar').removeClass("bg-light");
        $('#index-nav>.navbar-brand').css('cssText','color:#f8f8f8 !important');
        $('.dropdown-menu').css('background-color','transparent');
        $('.navbar').css('box-shadow','none');
      }
      if(this.scrollY>500){
        $('.scroll-up-btn').addClass("show");
      }
      else{
        $('.scroll-up-btn').removeClass("show");
      }
      
    })
  });
  //slide-up script
  $('.scroll-up-btn').click(function () {
      $('html').animate({scrollTop: 0});
    });
  $('#card-1 .card__image,#card-1 .card__content').click(function(e){
    e.preventDefault();
    window.open("haber1.html","_blank");
  });
  $('#card-2 .card__image,#card-2 .card__content').click(function(e){
    e.preventDefault();
    window.open("haber2.html","_blank");
  });
  $('#card-3 .card__image,#card-3 .card__content').click(function(e){
    e.preventDefault();
    window.open("haber3.html","_blank");
  });
  function generatePdf(){
    const element=document.getElementsByClassName('wrapper-hakkimda');
    html2pdf().from(element[0]).save();

  }
  const paragraph=document.getElementsByClassName('cv')[0];
  const edit_button=document.getElementById('edit-button');
  const end_button=document.getElementById('end-button');
  end_button.style.visibility='hidden';
  //edit
  edit_button.addEventListener("click", function() {
    paragraph.contentEditable = true;
    paragraph.style.backgroundColor = "#dddbdb";
    end_button.style.visibility='visible';
  } );
  //edit end
  end_button.addEventListener("click", function() {
    paragraph.contentEditable = false;
    paragraph.style.backgroundColor = "transparent";
    end_button.style.visibility='hidden';
  } );
  function editToggle(){
    const element=this.document.getElementById('my-name');
    element.attr('contenteditable','true');
    console.log(element);
  }