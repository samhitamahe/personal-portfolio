document.addEventListener("DOMContentLoaded", function () {
    // Select the mouse icon
    const mouseIcon = document.querySelector(".mouse");

    // Add click event listener to the mouse icon
    mouseIcon.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const aboutSection = document.getElementById("about"); // Get the section to scroll to

        // Scroll to the about section smoothly
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

(function () {
    emailjs.init("vbgKZEJLGmBPvx3U1"); // Replace 'YOUR_USER_ID' with your EmailJS user ID
})();

document.getElementById('send-btn').addEventListener('click', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var templateParams = {
        to_name: 'M.Samhita', // Replace with recipient's name
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_tuc8ycb', 'template_ytx7dlv', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, function (error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
});

var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
