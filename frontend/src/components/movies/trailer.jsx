import React from 'react'
import './trailer.css'

class Trailer extends React.Component { 
    
    constructor(props) {
        super(props);
    }

    componentDidMount (){
        if (!this.props.movie){
            this.props.getMovie(this.props.movieId)
        }
    }

    render() {
       
        return (
            <div className="trailer-container">
                <div 
                    className="trailer-close-button"
                    onClick={this.props.closeModal}
                >X</div>
                <iframe className="trailer"
                title="trailerFrame"
                src="https://www.youtube.com/embed/akX3Is3qBpw" 
                src={this.props.movie.trailer_url}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullscreen>
                </iframe>
            </div>
        )
        }
}

export default Trailer;
