import { useState, useEffect, useRef } from "react";

import Clock from "./Clock";
import FlipIcon from "./FlipIcon";
import SideMenu from "./SideMenu";
import AreasMenu from "./AreasMenu";


//global declarations

function SNav(props){
    const [ flipped, setFlipped ] = useState(false);
    const [ sideMenu, setSideMenu ] = useState(false);
    const [ isShowAreas, setIsShowAreas ] = useState(false);

    const areasRef = useRef(null);

    // destructing props
    const { authed, setAuthed } = props;

    const showAreas = ()=>{
        setIsShowAreas(!isShowAreas);
        return;
    }

    function onFlipIconClick(e){
        setFlipped(!flipped);
        setSideMenu(!sideMenu);

        return;
    }


    // effects

    // useEffect(()=>{
    //     areasRef.current.style.display = "none";
    // }, []);

    return(
        <nav className="s-nav">
            <span className="nav-title">
                City Security System
                <Clock />
            </span>
            {authed && (
                <>
                    <AreasMenu {...{isShowAreas, showAreas}} />
                    <FlipIcon {...{flipped, onFlipIconClick}} />
                    <SideMenu {...{sideMenu}} />
                </>
            )}
        </nav>
    )
}


export default SNav;