/** @jsx jsx */
import { jsx, Grid, Box, Text, Heading } from "theme-ui";
import React from "react";

import BlockLink from "./BlockLink";

const features = [
  {
    title: "subgraphs",
    imageUrl: "/img/triangle.svg",
    description: (
      <>
        An index of all Foundation market data and information that is easily
        accessible via a GraphQL API.
      </>
    ),
    linkUrl: "docs/subgraphs",
  },
  {
    title: "contracts",
    imageUrl: "/img/circle.svg",
    description: <>Foundation’s smart contracts on the Ethereum blockchain.</>,
    linkUrl: "docs/contracts",
  },
  {
    title: "npm package",
    imageUrl: "/img/square.svg",
    description: (
      <>
        A lightweight package giving you everything you need to start building
        experiences on top of Foundation.
      </>
    ),
    linkUrl: "",
  },
];

export default function HomeFeatures() {
  return (
    <Grid gap={20} columns={[null, null, 3]}>
      {features.map((feature) => (
        <BlockLink
          linkUrl={feature.linkUrl}
          key={feature.title}
          sx={{ padding: 32 }}
        >
          <Grid gap={[24, null, 48]}>
            {feature.imageUrl && (
              <Box>
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  sx={{ display: "block" }}
                />
              </Box>
            )}
            <Grid gap={[24, null, 32]}>
              <Heading
                sx={{
                  fontFamily: "monospace",
                  fontSize: 24,
                  fontWeight: "body",
                  letterSpacing: 1.44,
                }}
              >
                {feature.title}
              </Heading>
              <Text sx={{ lineHeight: [1.7, null, 1.9] }}>
                {feature.description}
              </Text>
            </Grid>
          </Grid>
        </BlockLink>
      ))}
    </Grid>
  );
}
