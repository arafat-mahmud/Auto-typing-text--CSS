document.addEventListener("DOMContentLoaded", function() {
  const typedElement = document.querySelector('.typed');
  const typedOptions = {
    strings: typedElement.getAttribute('data-typed-items').split(', '),
    typeSpeed: 100,   // Adjust typing speed (in milliseconds)
    backSpeed: 50,    // Adjust backspacing speed (in milliseconds)
    startDelay: 100,  // Delay before typing starts (in milliseconds)
    backDelay: 1000,  // Delay before erasing (in milliseconds)
    loop: true        // Whether to loop the animation
  };
  
  new Typed(typedElement, typedOptions);
});
