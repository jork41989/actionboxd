import React from 'react'
import './trailer.css'

class Trailer extends React.Component {    
    render() {
        return (
            <div className="trailer-container">
                    <iframe className="trailer"
                        // min-width="560" 
                        // min-height="315" 
                        // width="100%" 
                        // height="auto" 
                        src="https://www.youtube.com/embed/t433PEQGErc" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
            </div>
        )
    }
}

export default Trailer;
