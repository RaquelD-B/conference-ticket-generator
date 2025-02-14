function generarTicket() {
  let fullName = document.getElementById("full-name").value;
  let email = document.getElementById("email-address").value;
  let message = document.querySelector("h1");
  let details = document.querySelector(".subtitle");
  message.innerHTML = `Congrats, ${fullName}! Your ticket is ready.`;
  details.innerHTML = `We've emailed your ticket to ${email} and will send updates
        in the run up to the event.`;
}
