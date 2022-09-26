
import React from "react";



export const Contact = function() {
    return (
        <div className="contact-section">
            <div className="contact-section-text">
                <p className="contact-title">CONTACT</p>
                <p>Submit the form below to get in touch with me</p>
            </div>

            <form
            className="form-container"
            >
                <input
                type="text"
                name="name"
                placeholder="Enter your name"
                id="contact-name"
                />

                <input
                type="text"
                name="email"
                placeholder="Enter your email"
                id="contact-email"
                />

                <textarea
                name="message"
                rows="10"
                placeholder="Enter your message"
                id="contact-message"
                >
                </textarea>

                <button
                id="contact-button"
                >
                    Submit form
                </button>
            </form>

        </div>
    )
}