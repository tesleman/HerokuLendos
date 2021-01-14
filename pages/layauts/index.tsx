import React from "react";
import Navigation from "../components/NavigateTop/Navigation";
import TopLine from "../components/NavigateTop/topLine";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BottomMenue from "../components/BottomMenue/BottomMenue";

export default function Layauts({ children }): React.ReactElement {
    return (
        <div>
            <TopLine />
            <Navigation />
            <main>{children}</main>
            <BottomMenue />
        </div>
    );
}
