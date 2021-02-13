/** @jsx jsx */
import { jsx, ThemeProvider, Box, Grid } from "theme-ui";
import { Global, css } from "@emotion/react";
import React from "react";

import Layout from "@theme/Layout";

import theme from "../utils/theme";
import "minireset.css";

import HomeHero from "../components/HomeHero";
import HomeHeader from "../components/HomeHeader";
import HomeFeatures from "../components/HomeFeatures";
import HomeQuestions from "../components/HomeQuestions";
import HomeProjects from "../components/HomeProjects";
import HomeFooter from "../components/HomeFooter";

function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            .navbar,
            .footer {
              display: none;
            }
          `}
        />
        <Layout title="fnd.dev" description="Foundation Docs">
          <Box sx={{ maxWidth: 1240, marginX: "auto", paddingX: 30 }}>
            <HomeHeader />
            <Grid gap={[48, 72, 108]}>
              <HomeHero />
              <HomeFeatures />
            </Grid>
            <HomeQuestions />
            <HomeProjects />
            <HomeFooter />
          </Box>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default Home;
