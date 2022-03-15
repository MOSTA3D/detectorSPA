import { useEffect } from "react";

function CamGrid() {
    // todo: use useEffect to get the cameras urls and display it.

    const elarr = [];
    for(let i = 0; i<10; i++){
        elarr.push(
            <div key={i} className='something'>
                <span></span>
            </div>
        );
    }

    return(
        <main className="cam-grid">
            {elarr}
        </main>
    )
}

export default CamGrid;