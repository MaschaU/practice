import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
      color: "black",
    },
  },
  { name: "Footer" });

const Footer = (props) => {
  const { children } = props;

  const classes = useStyles();

  if (!children) return null;
  return (
    <footer className={classes.root}>{children}</footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};



export default Footer;
