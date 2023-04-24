import { Dehaze, ExitToApp } from "@mui/icons-material";
import { styled } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MainContainer = styled(Box)({
	background: "#00AAFF",
	flex: 0,
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	flexDirection: "column",
});

export default function SideBar() {
	return (
		<MainContainer>
			<Button sx={{ color: "#d6d0d0" }}>
				<Dehaze sx={{ fontSize: "2rem" }} />
			</Button>
			<Button sx={{ color: "white", marginBottom: "30px" }}>
				<ExitToApp />
			</Button>
		</MainContainer>
	);
}
