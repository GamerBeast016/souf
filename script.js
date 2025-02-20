/*hamburgermenu*/
// JavaScript to toggle the hamburger menu
document.getElementById('menu-button').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('show');
});



/*search bar for the hambuergermenu*/
// Toggle dropdown visibility
function toggleDropdown(dropdownId) {
  document.getElementById(dropdownId).classList.toggle("shown");
}

// Filter search results
function filterFunction(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  const filter = input.value.toUpperCase();
  const div = document.getElementById(dropdownId);
  const a = div.getElementsByTagName("a");

  for (let i = 0; i < a.length; i++) {
      const txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
      } else {
          a[i].style.display = "none";
      }
  }
}

// Handle "Enter" key event for redirection
function handleKeyDown(event, inputId, dropdownId) {
  if (event.key === "Enter") {
      const input = document.getElementById(inputId).value.toLowerCase();
      const div = document.getElementById(dropdownId);
      const a = div.getElementsByTagName("a");

      for (let i = 0; i < a.length; i++) {
          const linkText = a[i].textContent.toLowerCase();
          if (linkText.startsWith(input) && a[i].style.display !== "none") {
              // Redirect to the first matching link
              window.location.href = a[i].href;
              break;
          }
      }
      event.preventDefault(); // Prevent the default form submission
  }
}

// Toggle mobile menu
document.getElementById("menu-button").addEventListener("click", function() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("showne");
});

// for the form to show a message
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const messageDiv = document.createElement("div");
    
    messageDiv.style.display = "none";
    messageDiv.style.marginTop = "20px";
    messageDiv.style.paddingLeft = "20%";
    messageDiv.style.color = "#313131da";
    messageDiv.style.fontWeight = "bold";
    
    const submitButton = form.querySelector("button[type='submit']");
    submitButton.parentNode.insertBefore(messageDiv, submitButton.nextSibling);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("kontaktperson").value;
        messageDiv.textContent = `Tack, ${name}! Din anmälan har skickats.`;
        messageDiv.style.display = "block";

        setTimeout(() => {
            messageDiv.style.display = "none";
        }, 5000);

        form.reset(); // Reset form fields
    });
});
