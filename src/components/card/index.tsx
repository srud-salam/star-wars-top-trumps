import React from "react";

import {
  Container,
  Name,
  Image,
  Features,
  Feature,
  FeatureTitle,
  FeatureValue,
  Properties,
  Property,
  PropertyTitle,
  PropertyValue,
  Winner,
  Player,
} from "./person";

function Person({ data, isWinner, index }) {
  return (
    <>
      <Player>Player {index + 1}</Player>
      <Container>
        <Name>{data.name}</Name>
        <Image>image</Image>
        <Features>
          <Feature>
            <FeatureTitle>Mass</FeatureTitle>
            <FeatureValue>
              {data.mass === 0 ? "Unknown" : data.mass}
            </FeatureValue>
          </Feature>
          <Feature>
            <FeatureTitle>Height</FeatureTitle>
            <FeatureValue>{data.height}</FeatureValue>
          </Feature>
          <Feature>
            <FeatureTitle>Gender</FeatureTitle>
            <FeatureValue>{data.gender}</FeatureValue>
          </Feature>
        </Features>

        <Properties>
          <Property>
            <PropertyTitle>Hair color</PropertyTitle>
            <PropertyValue>{data.hair_color}</PropertyValue>
          </Property>
          <Property>
            <PropertyTitle>Skin color</PropertyTitle>
            <PropertyValue>{data.skin_color}</PropertyValue>
          </Property>
          <Property>
            <PropertyTitle>Eye color</PropertyTitle>
            <PropertyValue>{data.eye_color}</PropertyValue>
          </Property>
        </Properties>
        {isWinner && <Winner>Winner</Winner>}
      </Container>
    </>
  );
}

export default Person;
