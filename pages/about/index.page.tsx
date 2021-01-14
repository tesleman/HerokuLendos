import { Container } from "@material-ui/core";
import React from "react";

export default function About(): React.ReactElement {
    return (
        <Container style={{ marginTop: 40 }}>
            <img style={{ height: "50vh" }} src="/bamboo.jpg" alt="" />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                ullam commodi sunt ipsum magni facere atque deleniti ducimus, id
                non blanditiis eveniet quas hic nihil porro nobis fugit culpa
                minus.
            </p>
        </Container>
    );
}
