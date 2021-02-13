/** @jsx jsx */
import { jsx, Box } from "theme-ui";

export default function HomeHeader() {
  return (
    <Box sx={{ paddingTop: [32, null, 88], paddingBottom: [32, null, 80] }}>
      <img src="/static/img/fnd-dev-logo.svg" sx={{ display: "block" }} />
    </Box>
  );
}
