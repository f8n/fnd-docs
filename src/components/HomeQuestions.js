/** @jsx jsx */
import { jsx, Box, Heading, Text, Grid, Button } from "theme-ui";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
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
        <Link to="https://discord.foundation.app/">
          <Button sx={{ width: ["100%", null, "auto"] }}>discord</Button>
        </Link>
      </Grid>
    </Box>
  );
}
