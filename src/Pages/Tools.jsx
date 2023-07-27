import { Box, Center, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import SkillItem from "../components/Skills/SkillItem";
import Github from "../images/github_logo.png";
import git_logo from "../images/git_logo.png";
import canva from "../images/canva.jpg";
import postman_logo from "../images/postman_logo.jpg";
import Thunder_logo from "../images/Thunder_logo.jpg";
// import Github from "../images/github_logo.jpg";

const Tools = () => {
  let arr = [
    { src: git_logo, name: "Git" },
    { src: postman_logo, name: "Postman" },
    { src: Thunder_logo, name: "Thunder client" },
    { src: canva, name: "Canva" },
    { src: Github, name: "Github" },
  ];
  return (
    <Box id="skills">
      <Center mb={{ base: "20px", md: "40px" }}>
        <Heading>Tools</Heading>
      </Center>
      <Box minHeight={{ base: "70vh", md: "100vh" }}>
        <Center>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={{ base: 4, md: 6 }}
          >
            {arr.map((item, i) => {
              return <SkillItem key={i} logo={item} />;
            })}
          </Grid>
        </Center>
      </Box>
    </Box>
  );
};

export default Tools;
