// Get all the navigation links
const navLinks = document.querySelectorAll('header nav a');

// Add event listener to each link
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the section id from the link href
    const sectionId = link.getAttribute('href').split('#')[1];

    // Scroll to the section
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Get the hero button
const heroButton = document.querySelector('#hero button');

// Add event listener to the hero button
heroButton.addEventListener('click', () => {
  // Scroll to the about section
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth',
  });
});

// Get the contact form
const contactForm = document.querySelector('#contact form');

// Add event listener to the contact form
contactForm.addEventListener('submit', (e) => {
  // Prevent default form submission
  e.preventDefault();

  // Get the form fields
  const name = document.querySelector('#contact #name').value;
  const email = document.querySelector('#contact #email').value;
  const message = document.querySelector('#contact #message').value;

  // Validate the form fields
  if (name && email && message) {
    // Send the form data to Formspree
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted:', data);
        alert('Thank you for your message!');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
      });

    // Clear the form fields
    document.querySelector('#contact #name').value = '';
    document.querySelector('#contact #email').value = '';
    document.querySelector('#contact #message').value = '';
  } else {
    alert('Please fill out all the form fields.');
  }
});

// Add a fade-in effect to the sections
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
});

sections.forEach((section) => {
  section.classList.add('hidden');
  observer.observe(section);
});