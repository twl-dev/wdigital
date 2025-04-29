---
title: "Contact W Digital"
date: 2024-09-30T10:00:00+08:00
draft: false
summary: "Contact W Digital for AI automation, digital marketing strategies, and production services."
layout: contact # You might want to add this if the theme has a specific contact layout
params:
  contact_form_action: "https://formspree.io/f/mvgpjneq"
---

# Contact Us

We'd love to hear from you! Whether you have questions about our AI automation, digital marketing, or production services, feel free to reach out using the form below or via email.

## Get in Touch

{{< rawhtml >}}
<form action="https://formspree.io/f/mvgpjneq" method="POST" class="contact-form" aria-label="Contact Form">
  <!-- Add honeypot field for spam protection -->
  <input type="text" name="_gotcha" style="display:none">
  
  <!-- Add form fields with better spam protection -->
  <input type="hidden" name="_subject" value="New contact from W Digital website">
  
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" required>
    <span class="error-message" style="display: none;">Please enter your name</span>
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" required>
    <span class="error-message" style="display: none;">Please enter a valid email</span>
  </div>
  
  <div class="form-group">
    <label for="service">I'm interested in:</label>
    <select class="form-control" id="service" name="service">
      <option value="AI Automation">AI Automation Consultation</option>
      <option value="Digital Marketing">Digital Marketing Services</option>
      <option value="Production">Production Services</option>
      <option value="Multiple Services">Multiple Services</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="message">Message</label>
    <textarea class="form-control" id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
    <span class="error-message" style="display: none;">Please enter your message</span>
  </div>
  
  <div class="form-group">
    <div class="row">
      <div class="col-1">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="consent" required>
          <label class="form-check-label" for="consent">
            I consent to the processing of my personal data for the purpose of this event.
          </label>
        </div>
      </div>
    </div>
  </div>
  <button type="submit" class="submit-button">
    <span class="default-text">Send Message</span>
    <span class="loading-text" style="display: none;">Sending...</span>
  </button>
</form>

<style>
.contact-form {
  max-width: 600px;
  margin: 2rem 0;
}
.form-group {
  margin-bottom: 1.5rem;
}
.contact-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}
.contact-form button {
  background-color: #0077CC;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.contact-form button:hover {
  background-color: #005fa3;
}
.error-message {
  color: red;
  font-size: 0.8rem;
}
</style>
{{< /rawhtml >}}

## General Inquiries

For general questions or information, please email us at:  
**[info@wdigitalagency.com](mailto:info@wdigitalagency.com)**

## Follow Us

Stay connected with us on social media for the latest updates, AI tips, and digital marketing insights:

- [Threads](https://www.threads.net/@w.digital.agency)
- [Instagram](https://www.instagram.com/w.digital.agency)
- [GitHub](https://github.com/w-digital-agency/)