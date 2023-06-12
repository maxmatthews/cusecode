import styles from "./page.module.css";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<main className={`container`}>
				<div className={styles.logoContainer}>
					<img
						className={styles.logo}
						src={"/logo.svg"}
						alt={"cuse code logo"}
					/>
				</div>
				<h2>
					Cuse Code: We're a dev shop powered by junior developers fulfilling
					the entire <strong>SDLC</strong>.
				</h2>
				<h3 style={{ marginTop: 40, marginBottom: 40 }}>
					If you've made it to our site, you've probably got some questions.
					Hopefully we've got some answers. Click on <strong>any</strong>{" "}
					question below to learn more.
				</h3>
				<FAQ />
				<Contact />
				<Footer />
			</main>
		</div>
	);
}
