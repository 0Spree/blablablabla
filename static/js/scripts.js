/* Nav */
document.getElementById('burger-menu').addEventListener('click', function() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');
});

/* Testimonials */
document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    const steps = document.querySelectorAll('.carousel-step');
    let currentTestimonial = 0;
  
    // Initially hide all testimonials except the first one and highlight the first step
    testimonials.forEach((testimonial, index) => {
      if (index !== 0) testimonial.classList.add('hidden');
    });
  
    steps[0].style.backgroundColor = 'var(--primarybtnbg-color)';
  
    // Function to update the testimonials with sliding effect
    function updateTestimonials(index) {
      testimonials.forEach((testimonial, i) => {
        if (i === index) {
          testimonial.classList.remove('hidden');
        } else {
          testimonial.classList.add('hidden');
        }
      });
  
      steps.forEach((step, i) => {
        if (i === index) {
          step.style.backgroundColor = 'var(--primarybtnbg-color)';
        } else {
          step.style.backgroundColor = 'var(--carouselcircle-color)';
        }
      });
    }
  
    // Event listeners for navigation buttons
    document.getElementById('next-arrow').addEventListener('click', function () {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      updateTestimonials(currentTestimonial);
    });
  
    document.getElementById('back-arrow').addEventListener('click', function () {
      currentTestimonial =
        (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      updateTestimonials(currentTestimonial);
    });
  
    // Event listeners for carousel steps
    steps.forEach((step, index) => {
      step.addEventListener('click', function () {
        currentTestimonial = index;
        updateTestimonials(currentTestimonial);
      });
    });
  });

  // FAQ

  const faqButtons = document.querySelectorAll('.faq-button');

  faqButtons.forEach(faqButton => {
      faqButton.addEventListener('click', () => {
          const faqItem = faqButton.parentElement;
          faqItem.classList.toggle('active');
  
          const faqAnswerContainer = faqItem.querySelector('.faq-answer-container');
          faqAnswerContainer.classList.toggle('show'); // Toggle visibility of answer container
  
          const faqIcon = faqButton.querySelector('.faq-icon');
          const isExpanded = faqItem.classList.contains('active');
          faqIcon.textContent = isExpanded ? '-' : '+'; // Update icon based on state
      });
  });
  
// Footer
document.getElementById("currentYear").textContent = new Date().getFullYear();