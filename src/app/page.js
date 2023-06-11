import Image from "next/image";
import styles from "./page.module.css";
import FAQ from "@/components/FAQ";

export default function Home() {
	return (
		<main className={`container ${styles.main}`}>
			<div style={{ textAlign: "center" }}>
				<Image
					style={{ marginTop: 50 }}
					src={"/logo.svg"}
					alt={"cuse code logo"}
					width={950 / 2}
					height={742 / 2}
					priority={true}
				></Image>
			</div>
			<h2 style={{ marginTop: 50 }}>
				Cuse Code: We're a dev shop powered by junior developers fulfilling the
				entire <strong>SDLC</strong>.
			</h2>
			<h4 style={{ marginTop: 40, marginBottom: 40 }}>
				If you've made it to our site, you've probably got some questions.
				Hopefully we've got some answers. Click on <strong>any</strong> question
				below to learn more.
			</h4>
			<FAQ />
		</main>
	);
}
