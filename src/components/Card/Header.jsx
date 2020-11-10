import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
      color: "lime",
    },
  },
  { name: "Header" });

const Header = (props) => {
  const { title } = props;

  const classes = useStyles();

  return (
    <header className={classes.root}>{title}</header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,

};



export default Header;
