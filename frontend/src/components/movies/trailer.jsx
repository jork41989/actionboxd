import React from 'react'
import { withRouter } from 'react-router-dom';
import './trailer.css'

class Trailer extends React.Component {    
    
    // let trailer_url = this.props.movie.trailer_url;
    
    render() {
        debugger;
        return (
            <div className="trailer-container">
                    <iframe className="trailer"
                    src="https://www.youtube.com/embed/akX3Is3qBpw" 
                        // src={trailer_url}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullscreen>
                    </iframe>
            </div>
        )
    }
}

export default withRouter(Trailer);
