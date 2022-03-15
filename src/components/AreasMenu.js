import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


function AreasMenu(props){
    const { isShowAreas, showAreas } = props;

    return(
        <div>
            <span onClick={showAreas}>
                Areas <br />
                <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <div className={"areas" + (isShowAreas? " open":"")}>
                <ul>
                    <li>some</li>
                    <li>thing</li>
                    <li>else</li>
                    <li>some</li>
                </ul>
            </div>
        </div>
    )
}

export default AreasMenu;