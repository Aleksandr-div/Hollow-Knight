document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



window.addEventListener('scroll', function() {

  if(window.scrollY <= 900){
    document.querySelector('.up_arrow').style.opacity = "0";
  }else{
    document.querySelector('.up_arrow').style.opacity = "1";
  }

});


