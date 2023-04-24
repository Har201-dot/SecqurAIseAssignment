import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

const Container = styled(Box)({
	width: "200px",
	height: "40px",
	marginLeft: "15px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});
export default function AppbarLogo() {
	return (
		<Container>
			<img src="./sq.png" alt="SecqurAIse Technologies" width="150px"></img>
		</Container>
	);
}
