import React from 'react'
import './trailer.css'

class Trailer extends React.Component {    
    render() {
        return (
            <div className="trailer-container">
                    <iframe className="trailer"
                    src="https://www.youtube.com/embed/akX3Is3qBpw" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
            </div>
        )
    }
}

export default Trailer;
