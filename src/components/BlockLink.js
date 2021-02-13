/** @jsx jsx */
import { jsx } from "theme-ui";

import Link from "@docusaurus/Link";

import useBaseUrl from "@docusaurus/useBaseUrl";
import { transitions } from "../utils/theme";

export default function BlockLink(props) {
  const { children, linkUrl, externalUrl, className } = props;

  const sx = {
    borderColor: "#666 !important",
    border: "solid 1px",
    color: "white.100",
    display: "block",
    borderRadius: 10,
    transition: transitions.smooth.fast,
    willChange: "transform",
    "&:hover": {
      color: "white.100",
      textDecoration: "none",
    },
    "@media (hover: hover)": {
      "&:hover": {
        backgroundColor: "black.90",
        transform: "translateY(-7px) scale(1.008)",
        borderColor: "#fff !important",
      },
      "&:active": {
        transform: "translateY(0)",
      },
    },
  };

  if (externalUrl) {
    return (
      <a className={className} href={externalUrl} sx={sx}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={useBaseUrl(linkUrl)} sx={sx}>
      {children}
    </Link>
  );
}
