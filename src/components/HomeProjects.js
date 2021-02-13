/** @jsx jsx */
import { jsx, Box, Heading, Text, Grid, Flex } from "theme-ui";
import BlockLink from "./BlockLink";

const projects = [
  {
    title: "Terminal_",
    description:
      "A third party explorer of Foundation’s data. Culture’s bloomberg terminal.",
    imageUrl: "/static/img/terminal.jpg",
    externalUrl: "http://fnd.info",
    label: "fnd.info ↗",
  },
  {
    title: "Showtime",
    description:
      "Showcase your Foundation NFTs alongside other NFT collections.",
    imageUrl: "/static/img/showtime.jpg",
    externalUrl: "http://alpha.tryshowtime.com",
    label: "alpha.tryshowtime.com ↗",
  },
  {
    title: "NFTE",
    description: "Easily embed Foundation NFTs on a website via HTML or React.",
    imageUrl: "/static/img/nfte.jpg",
    externalUrl: "http://nfte.app",
    label: "nfte.app ↗",
  },
];

export default function HomeProjects() {
  return (
    <Grid gap={[24, null, 48]}>
      <Heading>Projects already integrating Foundation</Heading>
      <Grid gap={[20]} columns={[1, null, 3]}>
        {projects.map((project) => (
          <BlockLink
            key={project.title}
            sx={{
              borderRadius: 10,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            externalUrl={project.externalUrl}
          >
            <Box sx={{ marginBottom: 32 }}>
              <img
                src={project.imageUrl}
                sx={{ display: "block", width: "100%" }}
              />
            </Box>

            <Grid gap="8px" sx={{ paddingX: [32, null, 40] }}>
              <Heading>{project.title}</Heading>
              <Text>{project.description}</Text>
            </Grid>

            <Flex
              sx={{
                paddingX: [32, null, 40],
                paddingY: [32, null, 40],
                marginTop: "auto",
              }}
            >
              <Text>{project.label}</Text>
            </Flex>
          </BlockLink>
        ))}
      </Grid>
    </Grid>
  );
}
