"use client";

import styles from "./Contact.module.css";
import { Send } from "@mui/icons-material";

const Contact = () => {
	return (
		<div style={{ marginTop: 50 }}>
			<h2>Sold? Get in touch...</h2>
			<form action="https://api.web3forms.com/submit" method="POST">
				<input
					type="hidden"
					name="access_key"
					value="001db567-1748-4947-8515-4240ef2397b5"
				/>

				<label htmlFor={"name"} className={styles.label}>
					Name:
				</label>
				<input
					type={"text"}
					name={"name"}
					id={"name"}
					className={styles.input}
				/>
				<br />
				<label htmlFor={"email"} className={styles.label}>
					Email:
				</label>
				<input
					type={"email"}
					name={"email"}
					id={"email"}
					className={styles.input}
				/>
				<br />
				<label htmlFor={"message"} className={styles.label}>
					Message:
				</label>
				<textarea
					id={"message"}
					className={styles.textarea}
					rows={3}
					name={"message"}
				></textarea>
				<input
					type="hidden"
					name="redirect"
					value="https://web3forms.com/success"
				/>
				<button type={"submit"} className={styles.button}>
					Send <Send />
				</button>
			</form>
		</div>
	);
};

export default Contact;
