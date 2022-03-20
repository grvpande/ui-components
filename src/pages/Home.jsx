import React from "react";
import CardComponent from "../components/card/CardComponent";

export default function Home() {
    return (
        <div className="wrapper">
            <CardComponent>hello</CardComponent>
            <CardComponent>world</CardComponent>
            <CardComponent>with</CardComponent>
            <CardComponent>CardComponent</CardComponent>
        </div>
    );
}
