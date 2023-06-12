const Footer = () => {
	return (
		<footer
			style={{
				borderTop: "1px solid white",
				paddingTop: 25,
				marginTop: 50,
				paddingBottom: 25,
			}}
		>
			©{new Date().getFullYear()} Zane Tech LLC d/b/a Cuse Code
		</footer>
	);
};

export default Footer;
