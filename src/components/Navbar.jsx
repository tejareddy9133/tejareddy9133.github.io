import { Box, Flex, Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import DefaultNavbar from "./Navbar/DefaultNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import darkLogo from "../images/logo193.png";
import lightLogo from "../images/protfolio-icon.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { colorMode } = useColorMode();

  return (
    <Box
      zIndex={5}
      // border={"1px solid black"}
      position={"sticky"}
      top={0}
      bgColor={colorMode === "light" ? "white" : "black"}
    >
      <Flex
        h={"70px"}
        justifyContent={"space-between"}
        pl={["2", "2", "10"]}
        // border={"1px solid red"}
        alignItems={"center"}
      >
        <NavLink to={"https://tejareddy9133.github.io/"}>
          <Image
            src={colorMode === "light" ? lightLogo : darkLogo}
            w={"350px"}
          />
        </NavLink>

        <DefaultNavbar />
        <MobileNavbar />
      </Flex>
    </Box>
  );
}

export default Navbar;
