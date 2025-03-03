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
  // Validar que los campos no estén vacíos
  if (!fullName || !email || !gitHubUserName) {
    alert("Por favor, completa todos los campos.");
    return;
  }
  // Generar un número aleatorio para el ticket
  const ticketNumber = "#" + Math.floor(100000 + Math.random() * 900000);
  // Crear el HTML del ticket
  const ticketHTML = `<div class="ticket">
      <div class="ticket-content">
        <div class="ticket-header">
          <span>
            <img src="./assets/images/logo-full.svg" alt="" />
          </span>
        </div>
        <div class="ticket-date">Jan 31, 2026 / Austin, TX</div>
        <div class="profile">
          <img
            src="${uploadedImageURL}"
            alt="profile-pic"
            class="profile-pic"
          />
          <div class="profile-info">
            <div class="profile-name">${fullName}</div>
            <img src="./assets/images/icon-github.svg" alt="" />
            <div class="profile-user-name">${gitHubUserName}</div>
          </div>
        </div>
        <div class="dashed-line"></div>
        <div class="ticket-number">${ticketNumber} </div>
      </div>
    </div>`;

  let message = document.querySelector("h1");
  let details = document.querySelector(".subtitle");
  message.innerHTML = `Congrats, <span class="full-name-styling">${fullName}!</span> <br /> Your ticket is ready.`;
  details.innerHTML = `We've emailed your ticket to <br /> <span class="email-styling">${email}</span> and will send updates
        in <br />the run up to the event.`;

  // Reemplazar el contenido de .content-wrapper
  document.querySelector("form").innerHTML = ticketHTML;
}
