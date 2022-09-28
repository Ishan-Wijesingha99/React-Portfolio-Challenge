
import React from "react";
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'



// Contact component
export const Contact = function() {

    // using react-hook-form
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    // this function is executed when the form is submitted
    const onSubmit = () => {
        Swal.fire("Form submitted successfully!")        
    }

    return (
        <div className="height-container">
            <div className="contact-section">
                <div className="contact-section-text">
                    <p className="contact-title">CONTACT</p>
                    <p className="contact-text">Submit the form below to get in touch with me</p>
                </div>

                <form
                className="form-container"
                onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    id="contact-name"
                    // setting up this input as required using react-hook-form
                    {...register("firstName", {
                        required: true
                    })}
                    />
                    {/* if errors.firstName is true, display the error message */}
                    {errors.firstName && (
                    <p className="form-err-message">
                        Field is required
                    </p>)}

                    <input
                    type="type"
                    name="email"
                    placeholder="Enter your email"
                    id="contact-email"
                    // setting up this input as required and needing to be an email using react-hook-form
                    {...register("email", {
                        required: true,
                        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                    />
                    {/* if errors.email is true, display the error message */}
                    {errors.email && (
                    <p className="form-err-message">
                        Must be valid email address
                    </p>)}

                    <textarea
                    name="message"
                    rows="10"
                    placeholder="Enter your message"
                    id="contact-message"
                    // setting up this input as required using react-hook-form
                    {...register("message", {
                        required: true
                    })}
                    >
                    </textarea>
                    {/* if errors.message is true, display the error message */}
                    {errors.message && (
                    <p className="form-err-message">
                        Field is required
                    </p>)}

                    <button
                    id="contact-button"
                    type="submit"
                    >
                        Submit form
                    </button>
                </form>

            </div>
        </div>
    )
}