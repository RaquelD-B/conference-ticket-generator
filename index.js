function generarTicket() {
  let fullName = document.getElementById("full-name").value;
  let email = document.getElementById("email-address").value;
  let gitHubUserName = document.getElementById("user-name").value;
  // Validar que los campos no estén vacíos
  if (!fullName || !email || !gitHubUserName) {
    alert("Por favor, completa todos los campos.");
    return;
  }
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
            src="./assets/images/image-avatar.jpg"
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
        <div class="ticket-number">125425</div>
      </div>
    </div>`;

  let message = document.querySelector("h1");
  let details = document.querySelector(".subtitle");
  message.innerHTML = `Congrats, ${fullName}! Your ticket is ready.`;
  details.innerHTML = `We've emailed your ticket to ${email} and will send updates
        in the run up to the event.`;

  // Reemplazar el contenido de .content-wrapper
  document.querySelector("form").innerHTML = ticketHTML;
}
