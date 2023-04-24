import React from "react";
import { styled } from "@mui/material";
import { Box } from "@mui/system";

const Wrapper = styled(Box)({
	height: "80vh",
	fontWeight: "bold",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});
export default function NoEvents() {
	return <Wrapper>No data for this filter</Wrapper>;
}
