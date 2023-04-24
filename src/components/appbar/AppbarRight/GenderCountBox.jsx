import React from "react";
import { styled } from "@mui/material/styles";
import { Tooltip } from "@mui/material";
import { Box } from "@mui/system";

const Wrapper = styled(Box)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});
const CountBox = styled(Box)({
	padding: "10px",
	marginLeft: "10px",
	width: "40px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "10px",
});
export default function GenderCountBox({ maleCount, femaleCount }) {
	return (
		<Wrapper>
			<Tooltip title="male count">
				<CountBox
					style={{ color: "black", background: "green", fontSize: "1.2rem" }}
				>
					{maleCount}
				</CountBox>
			</Tooltip>
			<Tooltip title="female count">
				<CountBox
					style={{ color: "white", background: "orange", fontSize: "1.2rem" }}
				>
					{femaleCount}
				</CountBox>
			</Tooltip>
		</Wrapper>
	);
}
