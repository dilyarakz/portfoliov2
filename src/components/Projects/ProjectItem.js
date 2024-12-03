import React from "react";
import Card from "react-bootstrap/Card";

export default function ProjectItem({
  imageLink,
  title,
  techs,
  codelink,
  livelink,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={imageLink}
        style={{ objectFit: "fill", maxHeight: "170.64px" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Technologies: {techs}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={codelink}>Code</Card.Link>
        {livelink !== "#" ?  <Card.Link href={livelink}>Live</Card.Link> : <></>}
      </Card.Body>
    </Card>
  );
}
