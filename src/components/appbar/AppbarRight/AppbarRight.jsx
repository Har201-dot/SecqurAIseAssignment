import React from "react";
import { styled } from "@mui/material/styles";
import SearchBar from "./SearchBar";
import GenderCountBox from "./GenderCountBox";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";

const Wrapper = styled(Box)({
	display: "flex",
	justifyContent: "space-between",
	width: "390px",
});
export default function AppbarLeft() {
	const eventData = useSelector((state) => {
		return state.events.eventData;
	});
	let maleCount = 0,
		femaleCount = 0;

	for (const ID in eventData) {
		if (eventData[ID]["Gender"] === "Male") {
			maleCount++;
		} else if (eventData[ID]["Gender"] === "Female") {
			femaleCount++;
		}
	}
	return (
		<Wrapper>
			<SearchBar />
			<GenderCountBox maleCount={maleCount} femaleCount={femaleCount} />
		</Wrapper>
	);
}
