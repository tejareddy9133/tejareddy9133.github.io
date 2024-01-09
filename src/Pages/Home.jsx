import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Hide,
  Show,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import Resume from "../images/Tejeshkumar-Reddy-Resume.pdf";
import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";
import { TfiDownload, TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import Typical from "react-typical";

function Home() {
  const { colorMode } = useColorMode();
  const AnimatedFlex = motion(Flex);

  return (
    <Center
      pl={{
        base: "10",
        sm: "15",
        md: "20",
        lg: "20",
        xl: "20",
        "2xl": "20",
      }}
      pr={{
        base: "10",
        sm: "15",
        md: "20",
        lg: "20",
        xl: "20",
        "2xl": "20",
      }}
      h={{
        base: "100vh",
        sm: "100vh",
        md: "100vh",
        lg: "100vh",
        xl: "100vh",
        "2xl": "100vh",
      }}
      id="home"
    >
      <Flex justifyContent={"space-evenly"} w="100%">
        <Box>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              id="user-detail-name"
              mb={"20px"}
              fontSize={{
                base: "30px",
                sm: "30px",
                md: "40px",
                lg: "60px",
                xl: "64px",
                "2xl": "72px",
              }}
            >
              <Typical
                steps={["Hello", 1000, "My name is R Tejesh Kumar Reddy", 2000]}
                loop={Infinity}
                wrapper="p"
              />
            </Heading>
          </motion.div>

          <Heading
            mb={"20px"}
            fontSize={{
              sm: "20px",
              md: "25px",
              lg: "30px",
            }}
          >
            I'm a Full Stack Web Developer
          </Heading>
          <Text
            id="user-detail-intro"
            w={{
              base: "80%",
              sm: "80%",
              md: "55%",
              lg: "55%",
              xl: "55%",
              "2xl": "55%",
            }}
          >
            Full Stack Web Developer & Mentor who loves solving problems and
            building projects. I am equipped with a variety of technologies and
            tools to help me build the best possible product.
          </Text>
          <Hide below="md">
            <AnimatedFlex
              w={"300px"}
              justifyContent={"space-around"}
              mt={"10px"}
              mb={"20px"}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Tooltip hasArrow label="Github" bg="gray.300" color="black">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <NavLink
                    to={"https://github.com/tejareddy9133"}
                    target={"_blank"}
                  >
                    <Box id="contact-github">
                      <RxGithubLogo size="50px" border-radius="50%" />
                    </Box>
                  </NavLink>
                </motion.div>
              </Tooltip>
              <Tooltip hasArrow label="LinkedIn" bg="gray.300" color="black">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <NavLink
                    to={
                      "https://www.linkedin.com/in/r-tejeshkumarreddy-9b6881234/"
                    }
                    target={"_blank"}
                  >
                    <Box id="contact-linkedin">
                      <BsLinkedin size="50px" />
                    </Box>
                  </NavLink>
                </motion.div>
              </Tooltip>
              <Tooltip hasArrow label="Phone" bg="gray.300" color="black">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Box id="contact-phone">
                    <FiPhoneCall size="50px" />
                  </Box>
                </motion.div>
              </Tooltip>
              <Tooltip hasArrow label="Email" bg="gray.300" color="black">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Box
                    id="contact-email"
                    onClick={() => {
                      window.location.href =
                        "mailto:reddyvaritejeshkumarreddy@gmail.com";
                    }}
                  >
                    <TfiEmail size="50px" />
                  </Box>
                </motion.div>
              </Tooltip>
            </AnimatedFlex>
          </Hide>
          <Show below="md">
            <Flex
              w={"150px"}
              justifyContent={"space-around"}
              mt={"10px"}
              mb={"20px"}
            >
              <Tooltip hasArrow label="Github" bg="gray.300" color="black">
                <NavLink
                  to={"https://github.com/tejareddy9133"}
                  target={"_blank"}
                >
                  <Box id="contact-github">
                    <RxGithubLogo size="20px" border-radius="50%" />
                  </Box>
                </NavLink>
              </Tooltip>
              <Tooltip hasArrow label="LinkedIn" bg="gray.300" color="black">
                <NavLink
                  to={
                    "https://www.linkedin.com/in/r-tejeshkumarreddy-9b6881234"
                  }
                  target={"_blank"}
                >
                  <Box id="contact-linkedin">
                    <BsLinkedin size="20px" />
                  </Box>
                </NavLink>
              </Tooltip>
              <Tooltip hasArrow label="Phone" bg="gray.300" color="black">
                <Box id="contact-phone">
                  <FiPhoneCall size="20px" />
                </Box>
              </Tooltip>
              <Tooltip hasArrow label="Email" bg="gray.300" color="black">
                <Box
                  id="contact-email"
                  onClick={() => {
                    window.location.href =
                      "mailto:reddyvaritejeshkumarreddy@gmail.com";
                  }}
                >
                  <TfiEmail size="20px" />
                </Box>
              </Tooltip>
            </Flex>
          </Show>
          {/* <a
            id="resume-link-2"
            href={Resume}
            download=""
            rel="noreferrer"
            target="_blank"
          > */}
          <Button
            id="resume-button-2"
            onClick={() => {
              const resumeUrl = Resume;
              const fileName = "Tejesh-kumar-Reddy-resume.pdf"; // Change the file name if needed.

              // Initiate the file download using file-saver library.
              saveAs(resumeUrl, fileName);
              window.open(
                "https://drive.google.com/file/d/1_t3MDzHQwthW-YrcI_Rb2NnIDMm0IVD1/view?usp=share_link",
                "_blank"
              );
            }}
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
          >
            Resume
            <Box as={"span"} ml={"1"} fontSize={["xs", "sm", "lg", "xl"]}>
              {<TfiDownload />}
            </Box>
          </Button>
          {/* </a> */}
        </Box>
      </Flex>
    </Center>
  );
}

export default Home;
