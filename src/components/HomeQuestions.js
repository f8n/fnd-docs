/** @jsx jsx */
import { jsx, Box, Heading, Text, Grid } from "theme-ui";
import ExternalLink from "./ExternalLink";

export default function HomeQuestions() {
  return (
    <Box sx={{ paddingTop: [40, null, 96], paddingBottom: [64, null, 128] }}>
      <Grid gap={[24, null, 32]}>
        <Heading>Any questions?</Heading>
        <Text sx={{ maxWidth: 500 }}>
          If you’re looking to build something on Foundation, make sure you join
          the Discord and check out the devs section.
        </Text>
        <ExternalLink
          href="https://discord.foundation.app/"
          sx={{ color: "#54BCFB" }}
        >
          discord ↗
        </ExternalLink>
      </Grid>
    </Box>
  );
}
