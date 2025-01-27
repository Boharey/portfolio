document.addEventListener('DOMContentLoaded', function() {
  const inputField = document.getElementById('input');
  const outputField = document.getElementById('output');
  
  // Function to handle the commands entered by the user
  inputField.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault(); // Prevent the default behavior of Enter key
          
          const command = inputField.value.trim();
          if (command) {
              outputField.textContent += `C:\\Users\\Guest> ${command}\n`; // Show the command entered
              handleCommand(command); // Process the command
              inputField.value = ''; // Clear the input field
          }
      }
  });

  // Function to handle the input commands
  function handleCommand(command) {
      let response = '';
      if (command.toLowerCase() === 'help') {
          response = `Commands Available:
- name    : Displays user name
- about   : Displays information about user
- clear   : Clears the screen
- help    : Shows this help menu`;
      } else if (command.toLowerCase() === 'name') {
          response = 'username : Utsav Bohara';
      } else if (command.toLowerCase() === 'about') {
          response = 'I am an Undergraduate CSE student in Pashchimanchal College,IOE,TU.';
      } else if (command.toLowerCase() === 'clear') {
          outputField.textContent = ''; // Clear the screen
      } else {
          response = `"${command}" is not recognized as a command. Type 'help' for available commands.`;
      }

      // Add the response after the command
      outputField.textContent += `${response}\n`;
      outputField.scrollTop = outputField.scrollHeight; // Scroll to the bottom to show the latest output
  }
});


// Handle mobile menu toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
