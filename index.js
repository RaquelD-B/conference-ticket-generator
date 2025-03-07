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
            <img src="./assets/images/icon-github.svg" alt="" />
            <div class="profile-user-name">${gitHubUserName}</div>
          </div>
        </div>
        <div class="dashed-line"></div>
        <div class="ticket-number">${ticketNumber}</div>
      </div>
    </div>`;

  // Actualizar el mensaje y los detalles
  let message = document.querySelector("h1");
  let details = document.querySelector(".subtitle");
  message.innerHTML = `Congrats, <span class="full-name-styling">${fullName}!</span> <br /> Your ticket is ready.`;
  details.innerHTML = `We've emailed your ticket to <br /> <span class="email-styling">${email}</span> and will send updates
        in <br />the run up to the event.`;
  details.style.margin = "-13px auto -121px";

  // Ocultar el formulario
  const form = document.querySelector("form");
  form.style.display = "none";
  form.style.position = "absolute"; // Lo saca del flujo del documento
  form.style.height = "0";
  form.style.margin = "0";
  form.style.padding = "0";

  // Asegurar que el ticket reemplace el formulario sin mover la atribución
  let ticketContainer = document.getElementById("ticket-container");
  if (!ticketContainer) {
    ticketContainer = document.createElement("div");
    ticketContainer.id = "ticket-container";
    form.parentNode.insertBefore(
      ticketContainer,
      document.querySelector(".attribution")
    );
  }

  ticketContainer.innerHTML = ticketHTML;
}
