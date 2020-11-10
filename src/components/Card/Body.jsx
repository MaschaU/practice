import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
      color: "lightSeaGreen",
    },
  },
  { name: "Body" });

const Body = (props) => {
  const { title } = props;

  const classes = useStyles();

  return (
    <body className={classes.root}>{title}</body>
  );
};

Body.propTypes = {
  title: PropTypes.node.isRequired,

};



export default Body;
