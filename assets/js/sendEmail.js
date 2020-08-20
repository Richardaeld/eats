function sendMail(contactForm) {
    emailjs.send("gmail", "eats", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "phone_number":contactForm.phone.value,
        "client_question": contactForm.user_input.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            },
        function(error) {
            console.log("FAILED", error);
            }
        );
        return false; 
}