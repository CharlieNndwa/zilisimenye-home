// Get all needed elements from the DOM
const contactForm = document.querySelector("#contact-forms");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

// Get needed data from emailJS
const publicKey = "gPOcL0hroXwhOdEou";
const serviceID = "service_0n07r39";
const templateID = "template_0ribd4h";

// Initialize emailJS with public key
emailjs.init(publicKey);

// Add submit event to the form
contactForm.addEventListener("submit", (e) => {
  // Prevemt form default behaviour
  e.preventDefault();
  // Change button text
  submitBtn.innerText = "Just A Moment...";
  //   Get all input field values
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  //   Send the email
  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      // Change button text
      submitBtn.innerText = "Message Sent Successfully!";
      // Clear input fields
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    },
    (error) => {
      // Console log the error
      console.log(error);
      // Change button text
      submitBtn.innerText = "Something went wrong";
    }
  );
});
