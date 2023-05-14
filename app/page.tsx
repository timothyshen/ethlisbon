"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Card from "./components/Card";
import MintButton from "./components/MintButton";

export default function Home() {
  return (
    <Box>
      <Flex
        maxWidth={"5xl"}
        margin={"auto"}
        marginTop={"40px"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        rowGap={"30px"}
      >
        <Card
          title={"MoonDAO"}
          link={"/moondao"}
          imgSrc="images/profileIcon.png"
          subtitle={"108k Members"}
          description={
            "some description about the DAO, some sentences what its goal and idea"
          }
        />
        <Card
          title={"MrBeast"}
          link={"/"}
          imgSrc="images/profileIcon.png"
          subtitle={"56k Members"}
          description={
            "some description about the DAO, some sentences what its goal and idea"
          }
        />
        <Card
          title={"Charli D’Amelio"}
          link={"/"}
          imgSrc="images/profileIcon.png"
          subtitle={"167k Members"}
          description={
            "some description about the DAO, some sentences what its goal and idea"
          }
        />
        <Card
          title={"Marques Brownlee"}
          link={"/"}
          imgSrc="images/profileIcon.png"
          subtitle={"108k Members"}
          description={
            "some description about the DAO, some sentences what its goal and idea"
          }
        />
        <Card
          title={"PewDiePie"}
          link={"/"}
          imgSrc="images/profileIcon.png"
          subtitle={"108k Members"}
          description={
            "some description about the DAO, some sentences what its goal and idea"
          }
        />
        <Card
          title={"DAO Name"}
          link={"/moondao"}
          imgSrc="images/profileIcon.png"
          subtitle={"108k Members"}
          description={
            "some description about the DAO, some sentences what its goal and idea"
          }
        />
        <Card
          title={"KSI"}
          link={"/moondao"}
          imgSrc="images/profileIcon.png"
          subtitle={"108k Members"}
          description={
            "some description about the DAO, some sentences what its goal and idea"
          }
        />
        <Card
          title={"Ryan Trahan"}
          link={"/"}
          imgSrc="images/profileIcon.png"
          subtitle={"108k Members"}
          description={
            "some description about the DAO, some sentences what its goal and idea"
          }
        />
      </Flex>
    </Box>
  );
}
