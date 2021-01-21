(function () {
   const header = document.querySelector ('.header');
   window.onscroll = () => {
       if (window.pageYOffset > 100) {
           header.classList.add('header_activ');
       } else{
        header.classList.remove('header_activ');
       }
   }
}());