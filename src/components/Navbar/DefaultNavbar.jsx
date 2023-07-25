import { Box, Button, Flex, Hide, useColorMode } from "@chakra-ui/react";
import { TfiDownload } from "react-icons/tfi";
import ColorModeToggle from "../Darkmode";
import Resume from "../../images/Tejeshkumar-Reddy-Resume.pdf";
// eslint-disable-next-line no-unused-vars
import styes from "./Navbar.css";
import * as Scroll from "react-scroll";
import { saveAs } from "file-saver";
function DefaultNavbar() {
  const { colorMode } = useColorMode();
  return (
    <Hide breakpoint="(max-width: 770px)">
      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        w={{
          md: "48em",
          lg: "58em",
          xl: "68em",
          "2xl": "60%",
        }}
        id="nav-menu"
        // border={"1px solid blue"}
      >
        {/* Home */}
        <Scroll.Link
          // activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link home hover-underline-animation"
        >
          <Button
            _hover={{ color: colorMode === "light" ? "blue" : "red" }}
            bgColor={colorMode === "light" ? "white" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Home
          </Button>
        </Scroll.Link>
        {/* About */}
        <Scroll.Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link about hover-underline-animation"
        >
          <Button
            _hover={{ color: colorMode === "light" ? "blue" : "red" }}
            bgColor={colorMode === "light" ? "white" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            About
          </Button>
        </Scroll.Link>
        {/* Skills */}
        <Scroll.Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link skills hover-underline-animation"
        >
          <Button
            _hover={{
              color: colorMode === "light" ? "blue" : "red",
              cursor: "pointer",
            }}
            bgColor={colorMode === "light" ? "white" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Skills
          </Button>
        </Scroll.Link>
        {/* Projects */}
        <Scroll.Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link projects hover-underline-animation"
        >
          <Button
            _hover={{
              color: colorMode === "light" ? "blue" : "red",
              cursor: "pointer",
            }}
            bgColor={colorMode === "light" ? "white" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Projects
          </Button>
        </Scroll.Link>
        {/* Contact */}
        <Scroll.Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link contact hover-underline-animation"
        >
          <Button
            _hover={{
              color: colorMode === "light" ? "blue" : "red",
              cursor: "pointer",
            }}
            bgColor={colorMode === "light" ? "white" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Contact
          </Button>
        </Scroll.Link>
        {/* Resume */}
        {/* <a
          id="resume-link-1"
          className="nav-link resume"
          href={Resume}
          download=""
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1_t3MDzHQwthW-YrcI_Rb2NnIDMm0IVD1/view"
            );
          }}
        > */}
        <Button
          id="resume-button-1"
          className="nav-link resume"
          download="Tejeshkumar-Reddy-Resume.pdf"
          _hover={{
            color: colorMode === "light" ? "black" : "white",
            cursor: "pointer",
          }}
          bgGradient={
            colorMode === "light"
              ? "linear(to-l,#3CAED7 100%, #40BAB6 100%)"
              : "none"
          }
          color={colorMode === "light" ? "white" : "black"}
          bgColor={colorMode === "dark" ? "red" : "none"}
          borderRadius={"10px"}
          fontSize={["xs", "sm", "lg", "xl"]}
          onClick={() => {
            const resumeUrl = Resume;
            const fileName = "Tejesh-kumar-Reddy-resume.pdf"; // Change the file name if needed.

            // Initiate the file download using file-saver library.
            saveAs(resumeUrl, fileName);
            window.open(
              "https://drive.google.com/file/d/1_t3MDzHQwthW-YrcI_Rb2NnIDMm0IVD1/view"
            );
          }}
        >
          Resume
          <Box as={"span"} ml={"1"} fontSize={["xs", "sm", "lg", "xl"]}>
            {<TfiDownload />}
          </Box>
        </Button>
        {/* </a> */}
        <ColorModeToggle />
      </Flex>
    </Hide>
  );
}
export default DefaultNavbar;
