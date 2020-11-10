import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const useStyles = createUseStyles({
    root: {
      backgroundColor: "tomato",
    },
  },
  { name: "Card" });

const Card = (props) => {
  const { title, body, footer } = props;

  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Header title={title}/>
      <Body title={body}/>
      
      
      {footer && <footer>{footer}</footer>}
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

Card.defaultProps = {
  footer: null,
};

export default Card;
