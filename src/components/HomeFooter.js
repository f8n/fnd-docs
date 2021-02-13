/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import ExternalLink from "./ExternalLink";

export default function HomeFooter() {
  return (
    <Flex
      gap={[24, null, 40]}
      sx={{ flexDirection: ["column", "row"], paddingY: [32, 64, 96] }}
    >
      <ExternalLink href="https://github.com/f8n">github</ExternalLink>
      <ExternalLink href="https://twitter.com/withfnd">twitter</ExternalLink>
      <ExternalLink href="https://discord.foundation.app/">
        discord
      </ExternalLink>
      <ExternalLink
        href="https://foundation.app/"
        sx={{ marginLeft: [null, "auto"], marginRight: [0] }}
      >
        foundation.app
      </ExternalLink>
    </Flex>
  );
}
