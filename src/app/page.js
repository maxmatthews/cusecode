import styles from "./page.module.css";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<main className={`container`}>
				<div style={{ textAlign: "center" }}>
					<img
						src={"/logo.svg"}
						alt={"cuse code logo"}
						className={styles.logo}
					></img>
				</div>
				<h2>
					Cuse Code: We're a dev shop powered by junior developers fulfilling
					the entire <strong>SDLC</strong>.
				</h2>
				<h4 style={{ marginTop: 40, marginBottom: 40 }}>
					If you've made it to our site, you've probably got some questions.
					Hopefully we've got some answers. Click on <strong>any</strong>{" "}
					question below to learn more.
				</h4>
				<FAQ />
				<Contact />
				<Footer />
			</main>
		</div>
	);
}
