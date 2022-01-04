//submit functionality with the form

const CForm = document.querySelector("form");

CForm.addEventListener("submit", (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  const { name, email, message } = event.target;

  // Use your API endpoint URL you copied from the previous step
  const endpoint =
    "https://hg6rzemw3d.execute-api.us-east-2.amazonaws.com/default/sendContactEmail";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
  const body = JSON.stringify({
    senderName: name.value,
    senderEmail: email.value,
    message: message.value,
  });
  const requestOptions = {
    method: "POST",
    body,
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      document.getElementById("result-text").innerText =
        "Email sent successfully!";
    })
    .catch((error) => {
      document.getElementById("result-text").innerText =
        "An unkown error occured.";
    });
});
