const form = document.querySelector(".contactform");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you for your message!");

    form.reset();
});