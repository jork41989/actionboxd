import React from 'react'
import './trailer.css'

class Trailer extends React.Component {    
    debugger;

    // let trailer_url = this.props.movie.trailer_url;

    render() {
        return (
            <div className="trailer-container">
                    <iframe className="trailer"
                    src="https://www.youtube.com/embed/akX3Is3qBpw" 
                        // src={trailer_url}
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
            </div>
        )
    }
}

export default Trailer;
