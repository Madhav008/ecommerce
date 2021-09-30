import React from "react";
import { Card } from "react-bootstrap";
import Ratting from "./Ratting";
import { Link } from "react-router-dom";

const Produts = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text>
            <div className="my-3">
              <Ratting
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color="red"
              />
            </div>
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Produts;
