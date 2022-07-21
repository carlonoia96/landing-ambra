import React, { FC } from 'react';
import { useSwipeable } from "react-swipeable";
import { useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import './Scroll.css';
import Presentation from "../Presentation/Presentation";

interface ScrollProps {}

// const Scroll: FC<ScrollProps> = () => (
//   <div className={styles.Scroll} data-testid="Scroll">
//     Scroll Component
//   </div>
// );

export default function Scroll(){
    const [padding, setPadding] = useState(0);
    const [index, setIndex] = useState(0);
    const [showAnim, setShowAnim] = useState(false);

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            console.log("User Swiped!", eventData);
            if (eventData.dir === "Up") {
                if (index === 7) {
                    return false;
                }
                let newidnex = index + 1;
                setIndex(newidnex);
                setPadding(newidnex * window.innerHeight);
            }
            if (eventData.dir === "Down") {
                if (index === 0) {
                    return false;
                }
                let newidnex = index - 1;
                setIndex(newidnex);
                setPadding(newidnex * window.innerHeight);
            }
        },
        onSwiping: (eventData) => {
            if (index === 7 && eventData.dir === "Up") {
                return;
            }
            if (eventData.first && eventData.dir === "Down") {
                return;
            }
            if (index !== 0 && eventData.dir === "Down") {
                setPadding(index * window.innerHeight - eventData.absY);
            }
            if (index !== 7 && eventData.dir === "Up") {
                setPadding(index * window.innerHeight + eventData.absY);
            }
        }
    });

    const setAnimation = () => {
        setShowAnim(true);
        setTimeout(() => {
            setShowAnim(false);
        }, 400);
    };

    return (
        <div className="Scroll">
            {(
                <ReactScrollWheelHandler
                    preventScroll={true}
                    upHandler={(e) => {
                        if (index === 7) {
                            return false;
                        }
                        let newidnex = index + 1;
                        setIndex(newidnex);
                        setPadding(newidnex * window.innerHeight);
                        setAnimation();
                    }}
                    downHandler={(e) => {
                        if (index === 0) {
                            return false;
                        }
                        let newidnex = index - 1;
                        setIndex(newidnex);
                        setPadding(newidnex * window.innerHeight);
                        setAnimation();
                    }}
                >
                    <div
                        className="ScrollContainer__scroller--1tTge"
                        style={{
                            transitionTimingFunction: "ease",
                            willChange: "transform",
                            transitionDuration: showAnim ? "500ms" : "0ms",
                            transform: "translate(0px, -0" + padding + "px) translateZ(0px)"
                        }}
                        id="container"
                        {...handlers}
                    >
                        <Presentation/>
                        <div className="section" style={{ backgroundColor: "#FF7777" }}>
                            2
                        </div>
                        <div className="section" style={{ backgroundColor: "#A2416B" }}>
                            3
                        </div>
                        <div className="section" style={{ backgroundColor: "#852747" }}>
                            4
                        </div>
                        <div className="section" style={{ backgroundColor: "#F5C6A5" }}>
                            5
                        </div>
                        <div className="section" style={{ backgroundColor: "#FF7777" }}>
                            6
                        </div>
                        <div className="section" style={{ backgroundColor: "#A2416B" }}>
                            7
                        </div>
                        <div className="section" style={{ backgroundColor: "#F5C3A5" }}>
                            8
                        </div>
                    </div>{" "}
                </ReactScrollWheelHandler>
            )}
        </div>
    )
};
