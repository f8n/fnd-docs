/** @jsx jsx */
import { jsx, Grid, Box, Heading, Text, Button } from "theme-ui";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function HomeHero() {
  return (
    <Grid gap={[24, null, 40]}>
      <Heading variant="display">
        Our community is creating the building blocks of the new creative
        economy.
      </Heading>
      <Grid gap={[32, null, 48]}>
        <Text sx={{ maxWidth: 500 }}>
          Help us build a new creative economy on the Ethereum network. The
          infrastructure is open, permissionless, and transparent.
        </Text>
        <Box>
          <Link to={useBaseUrl("/docs")}>
            <Button sx={{ width: ["100%", null, "auto"] }}>View docs</Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
