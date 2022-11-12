// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        // Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        // Show Message
        contactMessage.textContent = 'Write all input fields 📩'
    } else {
        emailjs.sendForm('service_4adu78s', 'template_g0cxand', '#contact-form', 'BID6w4JrR421vy2cr')
            .then(() => {
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message Sent ✔️'

                // Remove message from five seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000);
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED....🤔', error)
            })
        // To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)