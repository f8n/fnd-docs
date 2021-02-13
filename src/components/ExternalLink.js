/** @jsx jsx */
import { jsx } from "theme-ui";

export default function ExternalLink(props) {
  const { children, href, className } = props;
  return (
    <a
      href={href}
      sx={{
        marginRight: 40,
        color: "black.40",
        textDecoration: "none",
        "&:hover": {
          color: "white.100",
          textDecoration: "none",
        },
      }}
      className={className}
    >
      {children}
    </a>
  );
}
