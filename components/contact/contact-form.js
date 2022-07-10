import { useState } from 'react'
import classes from './contact-form.module.css'

const ContactForm = () => {
	const [enteredEmail, setEnteredEmail] = useState('')
	const [enteredName, setEnteredName] = useState('')
	const [enteredMessage, setEnteredMessage] = useState('')

	const sendMessageHander = (event) => {
		event.preventDefault()

		fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={sendMessageHander}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor='email'>Your Email</label>
						<input
							type='email'
							name='email'
							id='email'
							required
							value={enteredEmail}
							onChange={(e) => setEnteredEmail(e.target.value)}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='name'>Your Name</label>
						<input
							type='text'
							name='name'
							id='name'
							required
							value={enteredName}
							onChange={(e) => setEnteredName(e.target.value)}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor='message'>Your Message</label>
					<textarea
						name='message'
						id='message'
						rows='5'
						required
						value={enteredMessage}
						onChange={(e) => setEnteredMessage(e.target.value)}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button type='submit'>Send Message</button>
				</div>
			</form>
		</section>
	)
}

export default ContactForm