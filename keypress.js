  document.addEventListener('keydown', function(event) {
      const keyPressed = event.key.toLowerCase();

      
      if (keyPressed === 'w' && event.getModifierState('Shift')) {
       
        window.open('file:///C:/Users/ws/Pictures/%D0%91%D0%B5%D0%B7%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1.jpg', '_blank');
      }
    });