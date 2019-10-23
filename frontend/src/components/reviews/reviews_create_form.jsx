import React from 'react'

class ReviewsCreateForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            text: "",
            rating: "",
            date: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
//errors 

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        };
    }

    handleSubmit(e){
        e.preventDefault();
//this.props.createReview
    }


    render() {
        return (
            <div className="reviewsFormContainer">
                <form action="">

                    <label htmlFor="1">1</label>
                    <input type="radio" id="1" value="1" />

                    <label htmlFor="2">2</label>
                    <input type="radio" id="2" value="2" />

                    <label htmlFor="3">3</label>
                    <input type="radio" id="3" value="3" />

                    <label htmlFor="4">4</label>
                    <input type="radio" id="4" value="4" />

                    <label htmlFor="5">5</label>
                    <input type="radio" id="5" value="5" />

                    <textarea  
                        onChange={this.update("text")} 
                        value={this.state.text} 
                        placeholder="Add a review..." 
                    />
                </form>    
            </div>
        )
    }
}

export default ReviewsCreateForm;