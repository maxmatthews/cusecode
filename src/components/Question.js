import { useState } from "react";
import { UnfoldMore, UnfoldLess } from "@mui/icons-material";

const Question = ({ question, answer }) => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div
				style={{
					background: "#A2B4C3",
					padding: 10,
					cursor: "pointer",
					color: "black",
					border: "1px solid var(--darkBlue)",
				}}
				onClick={() => {
					setOpen(!open);
				}}
			>
				<h4 style={{ marginBottom: 0 }}>
					<span style={{ marginRight: 10 }}>
						{open ? <UnfoldLess /> : <UnfoldMore />}
					</span>
					{question}
				</h4>
			</div>
			{open && <div style={{ padding: 10 }}>{answer}</div>}
		</div>
	);
};

export default Question;
