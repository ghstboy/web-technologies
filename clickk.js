    function greetUser() {
      const name = document.getElementById('volunteer-name').value;
      if (name !== '') {
        const greeting = `Thank you for your information, ${name}!`;
        alert(greeting);
      } else {
        alert('Please enter your name.');
      }
    }

    function greetUser2() {
        const name = document.getElementById('volunteer-name').value;
     
          const greeting = `welcome to our public!`;
          alert(greeting);
       
          
        
      }

      function greetUser3() {
        const name = document.getElementById('first-name').value;
        if (name !== '') {
          const greeting = `We will contact you soon, ${name}!`;
          alert(greeting);
        } else {
          alert('Please enter your name.');
        }
      }

      function greetUser4() {
        const name = document.getElementById('donation-name').value;
        if (name !== '') {
          const greeting = `Thank you for your support, ${name}!`;
          alert(greeting);
        } else {
          alert('Please enter your name.');
        }
      }