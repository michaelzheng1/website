
 var typed = new Typed('#typehere', {
    strings: ['<h1>Hello, my name is Michael </h1> a software developer <h3><div id="details"><a href="mailto:mzheng1@terpmail.umd.edu"><i class="far fa-envelope what-second-div"></i></a><a href="https://github.com/michaelzheng1" target="_blank"><i class="fab fa-github what-second-div"></i></a><a href="https://www.linkedin.com/in/michael-zheng-77937013b/" target="_blank"><i class="fab fa-linkedin what-second-div"></i></a></div></h3>'],
    typeSpeed: 35,
    smartBackspace: true,
    backSpeed: 28,
    showCursor: false,
    startDelay: 0
   });
   $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1400, function(){
      window.location.hash = hash;
      });
      } 
    });
   });