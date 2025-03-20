document.getElementById("photo-input").addEventListener("change", previewImage);

let uploadedImageURL = "./assets/images/logo-full.svg"; // Imagen por defecto

function previewImage(event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      uploadedImageURL = e.target.result; // Guardar la imagen en base64
    };

    reader.readAsDataURL(file);
  }
}

function generarTicket() {
  let fullName = document.getElementById("full-name").value;
  let email = document.getElementById("email-address").value;
  let gitHubUserName = document.getElementById("user-name").value;

  if (!fullName || !email || !gitHubUserName) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const ticketNumber = "#" + Math.floor(100000 + Math.random() * 900000);

  const ticketHTML = `<div class="ticket">
      <div class="ticket-content">
      <img src="./assets/images/pattern-ticket.svg" alt="ticket-pattern" class="ticket-pattern">
        <div class="ticket-header">
          <span>
            <img src="./assets/images/logo-full.svg" alt="logo" class="ticket-logo" />
          </span>
        </div>
        <div class="ticket-date">Jan 31, 2026 / Austin, TX</div>
        <div class="profile">
          <img src="${uploadedImageURL}" alt="profile-pic" class="profile-pic" />
          <div class="profile-info">
            <div class="profile-name">${fullName}</div>
            <img src="./assets/images/icon-github.svg" class="icon-github" />
            <div class="profile-user-name">${gitHubUserName}</div>
          </div>
        </div>
       
        <div class="ticket-number">${ticketNumber}</div>
      </div>
    </div>`;

  let message = document.querySelector(".message");
  let details = document.querySelector(".details");
  message.innerHTML = `Congrats, <span class="full-name-styling">${fullName}!</span> Your ticket is ready.`;
  details.innerHTML = `We've emailed your ticket to <span class="email-styling">${email}</span> and will send updates in the run-up to the event.`;

  const form = document.querySelector("form");
  form.style.display = "none";

  const h1 = document.querySelector("h1");
  h1.style.display = "none";

  const subtitle = document.querySelector(".subtitle");
  subtitle.style.display = "none";

  let ticketContainer = document.getElementById("ticket-container");
  ticketContainer.innerHTML = ticketHTML;
}
