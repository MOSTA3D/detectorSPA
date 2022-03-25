import { useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./App";
import { postData } from "../utils/helper";
import { SERVER_URL } from "../utils/config";

// global state dependencies
import { getCameras } from "../actions/cameras";


// assets
import video from "./assets/final.mp4";

function CamGrid() {
    const wrapperRef = useRef(null);

    // context
    const [ state, dispatch ] = useContext(AppContext);
    console.log(state);
    // sideEffects
    useEffect(async ()=>{
        try{
            const cameras = await postData(`${SERVER_URL}/cameras`, {
                areaId: state.currentAreaState
            });
            if(!cameras){
                throw cameras;
            }
            dispatch(getCameras(cameras));
        }catch(err){
            console.log(err);
        }

    }, [state.currentAreaState]);

    // handlers
    const handleMouseEnter = e=>{
        e.target.previousSibling.play();
    };
    const handleMouseLeave = e=>{
        e.target.previousSibling.pause();
    }

    const elarr = [];
    for(let i = 0; i<10; i++){
        elarr.push(

            <div key={i} className='something'>
                <span>
                    <Link to="/grid/s">
                        <video src={"http://techslides.com/demos/sample-videos/small.mp4"} muted={true}></video>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="video-wrapper"></div>
                    </Link>
                </span>
            </div>
        );
    }

    return(
        <main className="cam-grid">
            {state.cameraState.map(el=>(
                <div key={el.id} className='something'>
                    <span>
                        <Link to={`/grid/${el.id}`}>
                            <video src={el.url} muted={true}></video>
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="video-wrapper"></div>
                        </Link>
                    </span>
                </div>
            ))}
        </main>
    )
}

export default CamGrid;