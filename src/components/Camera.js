import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faBackward } from '@fortawesome/free-solid-svg-icons';

function Camera(props){
    const [ isSideMenu, setIsSideMenu ] = useState(false);

    const onSlideIconClick = (_e)=>{
        setIsSideMenu(!isSideMenu);
    }

    return (
        <div className="camera">
            <main className="camera-main">
                {/* <img src= "https://wallpaperaccess.com/full/1165754.jpg" alt="image" /> */}
                <main>

                </main>
                <aside>

                </aside>
                <footer>
                <div>
                    <h3>
                        Summary
                    </h3>
                    <hr />
                    <br />
                    <ul>
                        <li>somthig</li>
                        <li>went</li>
                        <li>wrong</li>
                    </ul>
                </div>
                <div className="controller">
                    <button>
                        Generate report
                    </button>
                </div>
            </footer>

            </main>
            <aside className={isSideMenu ? "open":""}>
                <div className="slide-icon" onClick={onSlideIconClick}>
                    <FontAwesomeIcon style={{transform: isSideMenu ? "rotate(180deg)" : "rotate(0deg)"}} icon={faBackward} />
                </div>
                sidebar
            </aside>
        </div>
    )
}

export default Camera;