import PageLayout from "../layout/pagelayout";
import "./contact.css"

//https://www.npmjs.com/package/nodemailer

export default function Contact() { 
  return (
     <>
       <PageLayout>
      <h2>Contact</h2>
      <a href="mailto:seligmar@gmail.com">Send Email</a>
       <form id="contact-form" action="mailto:seligmar@gmail.com" className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" 
                       name="name" 
                       placeholder="Your Name" required />
                <span className="error-message" id="nameError"></span>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" 
                       name="email" 
                       placeholder="Your Email" required />
                <span className="error-message" id="emailError"></span>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" 
                          name="message" 
                          placeholder="Your Message" 
                          required></textarea>
                <span className="error-message" 
                      id="messageError"></span>
            </div>
            <button type="submit" 
                    className="submit-button">
              Send Message
            </button>
        </form>
      </PageLayout>
      </>
      )
    }