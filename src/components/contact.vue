<template>
    <div class="contact-container">
      <!-- Left side: Contact Information -->
      <div class="contact-info">
        <h2>Contact US</h2>
        <div class="info-item">
          <span class="info-icon">📍</span>
          <div>
            <h3>Address</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
        <div class="info-item">
          <span class="info-icon">📞</span>
          <div>
            <h3>Phone Number</h3>
            <p>+91 987854702</p>
          </div>
        </div>
        <div class="info-item">
          <span class="info-icon">✉️</span>
          <div>
            <h3>Email</h3>
            <p>ABC653@gmail.com</p>
          </div>
        </div>
        <div class="follow-us">
          <h3>Follow us</h3>
          <div class="social-icons">
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook"></i>
          </div>
        </div>
      </div>
      <!-- Right side: Send a Message Form -->
      <div class="message-form">
        <h2>Send a Message</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <input type="text" placeholder="First Name" v-model="form.firstName" />
            <input type="text" placeholder="Last Name" v-model="form.lastName" />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Enter Your Email" v-model="form.email" />
          </div>
          <div class="form-group">
            <input type="tel" placeholder="Enter Phone Number" v-model="form.phone" />
          </div>
          <div class="form-group">
            <textarea placeholder="Type Message.." v-model="form.message"></textarea>
          </div>
          <button type="submit" class="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        console.log('Form submitted', this.form);
        // Add form submission logic here (e.g., sending to API)
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-container {
    display: flex;
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .contact-info {
    flex: 1;
    background-color: #fff;
    padding: 20px;
    color: #333;
  }
  
  .contact-info h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .info-icon {
    font-size: 20px;
    margin-right: 10px;
  }
  
  .follow-us {
    margin-top: 20px;
  }
  
  .social-icons i {
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
  
  .message-form {
    flex: 1;
    background-color: #f26a3c;
    padding: 20px;
    color: #fff;
  }
  
  .message-form h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
  
  textarea {
    height: 100px;
  }
  
  .submit-btn {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border: none;
    color: #f26a3c;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #e05d2e;
  }
  </style>
  