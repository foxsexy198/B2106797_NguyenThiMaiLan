<template>
    <div>
      <div class="contact-container">
        <h1 class="contact-title">Contact - Lysian</h1>
        <p>If you have any questions or concerns, feel free to reach out to us!</p>
        <div class="contact-form-map">
            <form @submit.prevent="submitForm" class="contact-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name"  required />
                    <!-- <input type="text" id="name" v-model="formData.name" required /> -->
                </div>
        
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email"  required />
                    <!-- <input type="email" id="email" v-model="formData.email" required /> -->
                </div>
        
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message"  required></textarea>
                    <!-- <textarea id="message" v-model="formData.message" required></textarea> -->
                </div>
        
                <button type="submit">Submit</button>
            </form>
            <iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8414543770923!2d105.76804037481064!3d10.029938972519307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBD4bqnbiBUaMah!5e0!3m2!1svi!2s!4v1699598489202!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </template>
  
<script>
  export default {
    name: 'Contact'
  }
</script>
  
<style scoped>
    .contact-container {
        display: flex;
        flex-direction: column;
        margin: 5rem 0 0 0;
    }
    
    .contact-title, .contact-container p {
        text-align: center;
        margin-bottom: 1rem;
    }

    .contact-title {
        margin-top: 1rem;
        font-size: 1.5rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .contact-container p {
        color: #938d8d;
    }

    .contact-form-map {
        display: flex;
        justify-content: space-evenly;
        margin-top: 3rem;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        width: 25%;
        padding: 1rem;
        border-radius: 10px;
        background: rgb(234, 203, 203, 0.2);
    }
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    label {
        display: block;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }
    
    input,
    textarea {
        width: 100%;
        padding: 0.5rem;
    }
    
    textarea {
        height: 10rem;
    }

    button {
        width: 30%;
        font-size: 1rem;
        font-weight: bold;
        font-family:sans-serif;
        padding: 0.7rem 1rem;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        color: #000;
        background-color: #8dc68f;
    }

    .contact-map {
        width: 40%;
    }
</style>