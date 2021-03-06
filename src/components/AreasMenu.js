import { useState, useContext, useEffect } from "react";

// components
import SideCard from "./SideCard";

// useReducer things
import { AppContext } from "./App";
import { setCurrentArea } from "../actions/currentArea";
import { recieveAreas } from "../actions/areas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// configuration
import { SERVER_URL } from "../utils/config";


function AreasMenu(props){
    // destructing props
    const { isShowAreas, showAreas } = props;

    // local state
    const [currentCard, setCurrentCard] = useState(null);
    const [isSideCard, setIsSideCard] = useState(false);

    // useContext
    const [state, dispatch] = useContext(AppContext);
    const areas = state.areaState;

    useEffect(async ()=>{
        try{
            const data = await (await fetch(`${SERVER_URL}/areas`,{
                headers:{
                    'Authorization': `Bearer ${document.cookie.split(";")[0].split("=")[1]}`
                }
            })).json();
            if(data.message){
                throw data;
            }
            dispatch(recieveAreas(data));
        }catch(err){
            console.error(err);
        }
    }, []);

    // handlers
    const handleMouseEnter = (e)=>{
        setIsSideCard(true);
        setCurrentCard(areas[e.target.dataset.index-1]);
    }

    const handleMouseLeave = (e)=>{
        setIsSideCard(false);
        // setCurrentCard(null);
    }

    const handleAreaClick = (e)=>{
        const tgt = e.target.dataset.index;
        if(tgt){
            dispatch(setCurrentArea(tgt));
        }
    }

    const areasElements = areas.length?areas.map((el, i)=>
        <li key={el.id}
            data-index={el.id}>
            {el.name}
        </li>):[];

    return(
        <div onClick={showAreas}>
            <span>
                Areas <br />
                <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <div className={"areas" + (isShowAreas? " open":"")}>
                <ul onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleAreaClick}>
                    {areasElements}
                </ul>
                <SideCard {...currentCard} show={isSideCard} />
            </div>
        </div>
    )
}

export default AreasMenu;