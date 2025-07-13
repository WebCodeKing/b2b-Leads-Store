// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Toggle mobile menu visibility
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

 // Package booking modal logic
  const modal = document.getElementById('booking-modal');
  const closeModal = document.getElementById('close-modal');
  const bookingForm = document.getElementById('booking-form');
  const selectedPackageTitle = document.getElementById('selected-package');
  const packageInput = document.getElementById('package-name');

  document.querySelectorAll('.book-package').forEach(btn => {
      btn.addEventListener('click', () => {
          const pkg = btn.dataset.package;
          selectedPackageTitle.textContent = `Book: ${pkg}`;
          packageInput.value = pkg;
          modal.classList.remove('hidden');
      });
  });

  closeModal.addEventListener('click', () => modal.classList.add('hidden'));

//   bookingForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const name = document.getElementById('user-name').value;
//       const email = document.getElementById('user-email').value;
//       const company = document.getElementById('user-company').value;
//       const message = document.getElementById('user-message').value;
//       const packageName = packageInput.value;

//       const subject = encodeURIComponent(`New Package Booking: ${packageName}`);
//       const body = encodeURIComponent(
//           `Package: ${packageName}\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`
//       );

//       const mailto = `mailto:muhammadusman999999999@gmail.com?subject=${subject}&body=${body}`;
//       window.location.href = mailto;

//       modal.classList.add('hidden');
//       alert('Your message has been prepared. Please hit Send in your email app.');
//   });

    // Show thank-you modal if redirected
  window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === '#thank-you') {
      document.getElementById('thank-you-modal').classList.remove('hidden');
    }
  });

  function closeThankYou() {
    document.getElementById('thank-you-modal').classList.add('hidden');
    history.replaceState(null, null, ' '); // Clear the hash from URL
  }