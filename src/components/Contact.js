
import React from "react";
import { useForm } from 'react-hook-form'




export const Contact = function() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="height-container">
            <div className="contact-section">
                <div className="contact-section-text">
                    <p className="contact-title">CONTACT</p>
                    <p>Submit the form below to get in touch with me</p>
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
                    {...register("firstName", {
                        required: true
                    })}
                    />
                    {errors.firstName && (
                    <p className="form-err-message">
                        Field is required
                    </p>)}

                    <input
                    type="type"
                    name="email"
                    placeholder="Enter your email"
                    id="contact-email"
                    {...register("email", {
                        required: true,
                        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                    />
                    {errors.email && (
                    <p className="form-err-message">
                        Must be valid email address
                    </p>)}

                    <textarea
                    name="message"
                    rows="10"
                    placeholder="Enter your message"
                    id="contact-message"
                    {...register("message", {
                        required: true
                    })}
                    >
                    </textarea>
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