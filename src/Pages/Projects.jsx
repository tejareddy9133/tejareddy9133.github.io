import { Box, Center, Heading, Show } from "@chakra-ui/react";
import React from "react";
import {
  MediumProjectCard,
  ProjectCards,
} from "../components/Projects/ProjectCards";
//healthprime
import healthPrime_1 from "../images/healthPrime_1.png";
import healthPrime_2 from "../images/healthPrime_2.png";
import healthPrime_3 from "../images/healthPrime_3.png";
import healthPrime_4 from "../images/healthPrime_4.png";
import healthPrime_5 from "../images/healthPrime_5.png";
//busykid
import busykid_1 from "../images/busykid_1.png";
// import busykid_2 from "../images/busykid_2(1).png";
import busykid_3 from "../images/busykid_3.png";
import busykid_4 from "../images/busykid_4.png";

import techtrove_1 from "../images/techtrove_1.png";
import techtrove_2 from "../images/techtrove_2.png";
import techtrove_3 from "../images/techtrove_3.png";
import techtrove_4 from "../images/techtrove_4.png";
//
//justserve full stack project
//
import justserve_logo_1 from "../images/justserve_logo_1.png";
import justserve_logo_2 from "../images/justserve_logo_2.png";
import justserve_logo_3 from "../images/justserve_logo_3.png";
import justserve_logo_4 from "../images/justserve_logo_4.png";
import justserve_logo_5 from "../images/justserve_logo_5.png";
import justserve_logo_6 from "../images/justserve_logo_6.png";
import justserve_logo_8 from "../images/just_serve_logo_8.png";
import justserve_logo_9 from "../images/justserve_logo_9.png";
//
//
const Projects = () => {
  const HealthPrime = [
    healthPrime_1,
    healthPrime_2,
    healthPrime_3,
    healthPrime_4,
    healthPrime_5,
  ];
  //jjj

  const Justserve = [
    justserve_logo_9,
    justserve_logo_8,
    justserve_logo_6,
    justserve_logo_5,
    justserve_logo_4,
    justserve_logo_4,
    justserve_logo_3,
    justserve_logo_2,
    justserve_logo_1,
  ];
  const Busykid = [busykid_1, busykid_3, busykid_4];
  const Techtrove = [techtrove_1, techtrove_2, techtrove_3, techtrove_4];
  return (
    <Box
      pl={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      pr={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      id="projects"
    >
      <Center>
        <Heading mb={"40px"}>Projects</Heading>
      </Center>

      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://justserve-anshkathpal.vercel.app/"}
        image={Justserve}
        title={"Just Serve"}
        subTitle={"Volunteer opportunities"}
        GithubLink={"https://github.com/AnshKathpal/dizzy-vase-3091"}
        features={[
          "jsonweb tokens authentication",
          "Sign up or log in to watch  your volunteer opportunities",
          "Each Volunteer opportunity has a dedicated page with a detailed information ",
          "View Volunteer oppurtinites related to their location work mode type and by key words",
          "Sort, search, and filter to easily find the opportunities you're looking for",
          "Admin side with complete information of volunteer opportunities",
        ]}
        description={
          "Volunteer Search: Discover diverse opportunities to contribute to meaningful causes. Find and join volunteer projects matching your skills and interests. Empower change together."
        }
        techStack={[
          "React.js",
          "Chakra UI",
          "Redux",
          "Express js",
          "Node js",
          "Mongo DB",
        ]}
      />

      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://roasted-geese-6392-xh5g.vercel.app/"}
        image={HealthPrime}
        title={"Health Prime"}
        subTitle={"1mg Clone"}
        GithubLink={"https://github.com/Varun8177/Tata-1mg-clone"}
        features={[
          "Sign up or log in to add items to your cart and complete purchases",
          "Each product has a dedicated page with a detailed description",
          "View your cart details from the navbar section at any time",
          "Sort, search, and filter to easily find the products you're looking for",
        ]}
        description={
          "Health Prime is an online platform that offers a wide range of healthcare products and medicines to users. With its user-friendly interface and competitive pricing, Health Prime makes it easy for users to find and purchase the products they need. "
        }
        techStack={["Next.js", "Chakra UI", "FireBase", "Redux"]}
      />

      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://energized-baseball-7687.vercel.app/"}
        image={Busykid}
        title={"Busykids"}
        subTitle={"Bank Education for kids"}
        GithubLink={"https://github.com/RoshanAAS/energized-baseball-7687"}
        features={[
          "Sign up or log in Through the firebase authentication",
          "dedicated page with a detailed description",
          "Games  for child to learn money management",
          "Real Time payment integration wit razorpay",
        ]}
        description={
          " Busy Kids is a virtual bank for kids, where you can teach them about the value of money in a safe environment. Kids will learn how to budget, save up for goals and spend responsibly using our cool easy-to-use app and website, while teachers have control over the students accounts and activities."
        }
        techStack={["HTML", "CSS", "Chakra UI", "React", "Redux", "Firebase"]}
      />

      {/* //techtrove */}

      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://techtrove.vercel.app/"}
        image={Techtrove}
        title={"Techtrove"}
        subTitle={"Bestbuy clone"}
        GithubLink={"https://github.com/sachitsingh777/shivering-haircut-3518"}
        features={[
          "Sign up or log in to add items to your cart and complete purchases",
          "Each product has a dedicated page with a detailed description",
          "View your cart details from the navbar section at any time",
          "Sort,and filter to easily find the products you're looking for",
        ]}
        description={
          "Best Buy is a consumer electronics retailer with operations in the U.S., Mexico, and Canada. At its brick-and-mortar locations and online, the company sells a wide variety of items, including mobile phones and electronic , as well as home appliances like washing machines and refrigerators."
        }
        techStack={["HTML", "CSS", "Chakra UI", "React", "Redux"]}
      />

      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
          image={HealthPrime}
          deployedLink={"https://roasted-geese-6392-xh5g.vercel.app/"}
          GithubLink={"https://github.com/Varun8177/Tata-1mg-clone"}
          title={"Health Prime"}
          subTitle={"1mg Clone"}
          description={
            "Health Prime is an online platform that offers a wide range of healthcare products and medicines to users. With its user-friendly interface and competitive pricing, Health Prime makes it easy for users to find and purchase the products they need. "
          }
          techStack={["Next.js", "Chakra UI", "FireBase", "Redux"]}
        />
        <MediumProjectCard
          direction={"row-reverse"}
          deployedLink={"https://energized-baseball-7687.vercel.app/"}
          image={Busykid}
          title={"Busykids"}
          subTitle={"kids Bank application"}
          GithubLink={"https://github.com/RoshanAAS/energized-baseball-7687"}
          description={
            " Busy Kids is a virtual bank for kids, where you can teach them about the value of money in a safe environment. Kids will learn how to budget, save up for goals and spend responsibly using our cool easy-to-use app and website, while teachers have control over the students accounts and activities."
          }
          techStack={["HTML", "CSS", "Chakra UI", "React", "Redux", "Firebase"]}
        />
        <MediumProjectCard
          direction={"row-reverse"}
          deployedLink={"techtrove.vercel.app/"}
          image={Techtrove}
          title={"Techtrove"}
          subTitle={"Bestbuy clone"}
          GithubLink={
            "https://github.com/sachitsingh777/shivering-haircut-3518"
          }
          description={
            "Best Buy is a consumer electronics retailer with operations in the U.S., Mexico, and Canada. At its brick-and-mortar locations and online, the company sells a wide variety of items, including mobile phones and electronic , as well as home appliances like washing machines and refrigerators."
          }
          techStack={["HTML", "CSS", "Chakra UI", "React", "Redux"]}
        />
      </Show>
    </Box>
  );
};

export default Projects;
