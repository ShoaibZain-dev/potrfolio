/**
 * Shoaib — Solutions Beyond Design
 * Interactive Contact Form & WhatsApp Integration
 */

(function () {
  'use strict';

  const contactForm = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyPhoneBtn = document.getElementById('copy-phone-btn');

  // WhatsApp Number
  const WHATSAPP_NUMBER = '923229131403';
  const SHOAIB_EMAIL = 'malikshoaibzain@gmail.com';

  // Handle Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const service = document.getElementById('form-service').value;
      const message = document.getElementById('form-message').value.trim();

      // Validation
      if (!name || !email || !message) {
        showAlert('Please fill in all required fields (Name, Email, Message).', 'error');
        return;
      }

      // Format WhatsApp Inquiry Message
      const waText = 
`*New Inquiry via Website Portfolio*
-----------------------------
*Client Name:* ${name}
*Email:* ${email}
*Phone/WhatsApp:* ${phone || 'Not provided'}
*Service Needed:* ${service}
*Project Details:*
${message}
-----------------------------
Sent from Shoaib - Solutions Beyond Design`;

      const encodedMsg = encodeURIComponent(waText);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

      showAlert('Opening WhatsApp to send your inquiry directly to Shoaib...', 'success');

      // Open WhatsApp in new tab
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 700);

      // Reset form after short delay
      setTimeout(() => {
        contactForm.reset();
        showAlert('Thank you! Your message has been prepared. You can also email Shoaib directly at malikshoaibzain@gmail.com', 'success');
      }, 2000);
    });
  }

  function showAlert(msg, type) {
    if (!formAlert) return;
    formAlert.textContent = msg;
    formAlert.className = `form-alert ${type}`;
    formAlert.style.display = 'block';

    setTimeout(() => {
      formAlert.style.display = 'none';
    }, 7000);
  }

  // Copy Email Helper
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(SHOAIB_EMAIL).then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = '<span>Copied! ✓</span>';
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
        }, 2000);
      }).catch(() => {
        window.location.href = `mailto:${SHOAIB_EMAIL}`;
      });
    });
  }

  // Copy Phone Helper
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('03229131403').then(() => {
        const originalText = copyPhoneBtn.innerHTML;
        copyPhoneBtn.innerHTML = '<span>Copied! ✓</span>';
        setTimeout(() => {
          copyPhoneBtn.innerHTML = originalText;
        }, 2000);
      }).catch(() => {
        window.location.href = 'tel:03229131403';
      });
    });
  }

})();
