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

  // Get a reference to the select element
const userCategoriesSelect = document.getElementById('user-categories');

// Your list of professions (copy-paste the comprehensive list here)
const professions = [
    "Accountant",
    "Actor",
    "Actuary",
    "Acupuncturist",
    "Administrative Assistant",
    "Advertising Agent",
    "Aerospace Engineer",
    "Agricultural Engineer",
    "Agronomist",
    "Air Traffic Controller",
    "Airline Pilot",
    "Animator",
    "Anthropologist",
    "Architect",
    "Archivist",
    "Art Director",
    "Artist",
    "Astronomer",
    "Athletic Trainer",
    "Attorney",
    "Auditor",
    "Author",
    "Baker",
    "Banker",
    "Barber",
    "Biochemist",
    "Biologist",
    "Biomedical Engineer",
    "Biophysicist",
    "Bookkeeper",
    "Botanist",
    "Brand Manager",
    "Bricklayer",
    "Broker",
    "Builder",
    "Bus Driver",
    "Business Analyst",
    "Business Development Manager",
    "Butcher",
    "Call Center Agent",
    "Camera Operator",
    "Carpenter",
    "Cartographer",
    "Caterer",
    "Chef",
    "Chemist",
    "Chiropractor",
    "Civil Engineer",
    "Cleaner",
    "Clergy Member",
    "Clinical Psychologist",
    "Coach",
    "Cobbler",
    "Commercial Diver",
    "Composer",
    "Computer Hardware Engineer",
    "Computer Programmer",
    "Concierge",
    "Construction Manager",
    "Consultant",
    "Copywriter",
    "Corrections Officer",
    "Cosmetologist",
    "Counselor",
    "Credit Analyst",
    "Criminal Investigator",
    "Curator",
    "Customer Service Representative",
    "Dancer",
    "Data Analyst",
    "Data Scientist",
    "Database Administrator",
    "Dental Assistant",
    "Dental Hygienist",
    "Dentist",
    "Detective",
    "Dietitian",
    "Director",
    "Doctor",
    "Dog Trainer",
    "Driver",
    "Economist",
    "Editor",
    "Electrician",
    "Emergency Medical Technician (EMT)",
    "Engineer (General)",
    "Environmental Scientist",
    "Epidemiologist",
    "Event Planner",
    "Executive Assistant",
    "Farmer",
    "Fashion Designer",
    "Film Producer",
    "Financial Advisor",
    "Financial Analyst",
    "Firefighter",
    "Fisherman",
    "Flight Attendant",
    "Florist",
    "Food Scientist",
    "Forensic Scientist",
    "Forestry Worker",
    "Freelancer",
    "Game Developer",
    "Gardener",
    "Geologist",
    "Graphic Designer",
    "Hairdresser",
    "Heavy Equipment Operator",
    "Historian",
    "Home Health Aide",
    "Horticulturist",
    "Hotel Manager",
    "Human Resources Manager",
    "Illustrator",
    "Industrial Designer",
    "Industrial Engineer",
    "Information Security Analyst",
    "Insurance Agent",
    "Interior Designer",
    "Interpreter",
    "Investment Banker",
    "IT Support Specialist",
    "Janitor",
    "Jeweler",
    "Journalist",
    "Judge",
    "Kindergarten Teacher",
    "Laboratory Technician",
    "Landscape Architect",
    "Librarian",
    "Licensed Practical Nurse (LPN)",
    "Lifeguard",
    "Loan Officer",
    "Logistics Manager",
    "Machinist",
    "Mail Carrier",
    "Management Consultant",
    "Manufacturing Engineer",
    "Market Research Analyst",
    "Marketing Manager",
    "Massage Therapist",
    "Mathematician",
    "Mechanical Engineer",
    "Medical Assistant",
    "Medical Coder",
    "Medical Doctor (MD)",
    "Medical Laboratory Scientist",
    "Medical Records Technician",
    "Medical Transcriptionist",
    "Mental Health Counselor",
    "Meteorologist",
    "Microbiologist",
    "Military Personnel",
    "Miner",
    "Model",
    "Mortgage Broker",
    "Musician",
    "Nanny",
    "Network Administrator",
    "Nurse Practitioner",
    "Nutritionist",
    "Occupational Therapist",
    "Office Manager",
    "Operations Manager",
    "Optician",
    "Optometrist",
    "Paralegal",
    "Paramedic",
    "Park Ranger",
    "Pathologist",
    "Pharmacist",
    "Pharmacy Technician",
    "Photographer",
    "Physical Therapist",
    "Physicist",
    "Pilot",
    "Plasterer",
    "Plumber",
    "Podiatrist",
    "Police Officer",
    "Political Scientist",
    "Postmaster",
    "Preschool Teacher",
    "Principal",
    "Private Investigator",
    "Product Manager",
    "Production Manager",
    "Professor",
    "Project Manager",
    "Property Manager",
    "Psychiatrist",
    "Public Relations Specialist",
    "Purchasing Agent",
    "Quality Control Inspector",
    "Radiologist",
    "Real Estate Agent",
    "Receptionist",
    "Registered Nurse (RN)",
    "Reporter",
    "Research Scientist",
    "Restaurant Manager",
    "Retail Salesperson",
    "Robotics Engineer",
    "Roofer",
    "Sailor",
    "Sales Manager",
    "Sales Representative",
    "Sanitation Worker",
    "Scientist (General)",
    "Security Guard",
    "Social Worker",
    "Software Developer",
    "Sound Engineer",
    "Special Education Teacher",
    "Speech-Language Pathologist",
    "Statistician",
    "Stockbroker",
    "Structural Engineer",
    "Surgeon",
    "Surveyor",
    "Tailor",
    "Tax Accountant",
    "Taxi Driver",
    "Teacher",
    "Technical Writer",
    "Telemarketer",
    "Therapist",
    "Tile Setter",
    "Tour Guide",
    "Toxicologist",
    "Trade Show Coordinator",
    "Traffic Engineer",
    "Train Conductor",
    "Translator",
    "Travel Agent",
    "Truck Driver",
    "Urban Planner",
    "UX Designer",
    "Veterinarian",
    "Veterinary Technician",
    "Video Editor",
    "Web Developer",
    "Welder",
    "Writer",
    "Zoologist"
];

// Sort the professions alphabetically (optional, but good for user experience)
professions.sort();

// Loop through the professions array and add each as an option
professions.forEach(profession => {
    const option = document.createElement('option');
    option.value = profession;
    option.textContent = profession;
    userCategoriesSelect.appendChild(option);
});