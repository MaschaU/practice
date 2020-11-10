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
  const { title } = props;

  const classes = useStyles();

  return (
    <footer className={classes.root}>{title}</footer>
  );
};

Footer.propTypes = {
  title: PropTypes.node,

};



export default Footer;
