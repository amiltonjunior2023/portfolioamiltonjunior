document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('welcome-text');
    const text = 'Amilton Júnior';
    let index = 0;
  
    function type() {
      textElement.textContent += text[index];
      index++;
  
      if (index < text.length) {
        setTimeout(type, 300); // Adjust the speed (in milliseconds) of typing
      }
    }
  
    type();
  });

    
 