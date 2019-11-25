# ActionBoxd

![alt text](https://i.imgur.com/m7ZZwNu.png)

[Visit Us!](https://actionboxd.herokuapp.com/#/)


Created by

[Jordan Ackerman](https://github.com/jork41989) 

[Gabriel Antonio Barrios Hernandez](https://github.com/gbarrios212)

[Frida Pulido](https://github.com/FridaPolished)

A movie review platform that allows users to collect, share and discover top action movies from across history.

## Functionality & MVP

### User Auth

* Users can sign up and sign in

### User profiles

* Users can see their watched films/ reviews

### Users Watched movies

* Users can mark a movie as watched

### Users Reviewed films

* Users can write a review on a film
* Users can see other users reviews


### Movie Show Pages

* Movies have show pages where users can see the actors who were in the film and a list of reviews. It also has a modal which can display the trailer and the movies poster. 

### Ratings

* Part of the review form is a raiting, the raiting is used seperatly on the index page to calculate the average star raiting for the film. 

### Movie Actors search

* Users can search via the nav bar.

### Actors table/info

* Actors have show pages that list their bio, a photo and a list of films they have been in. 

### Admin Page

* Admin users can add movies or actors via forms locates on the Admin page. 

### Errors

![alt Text](http://g.recordit.co/3lnEShWV1Z.gif)


## Technologies & Challenges
 
### Architecture

ActionBoxd is built with the MERN stack (MongoDB, Express, React, and Node) and AWS.



### Challenges 
Styling and workload, the bonus features are a bit tedious and so we are a little worried about completing them.  





---

## Features

### Users

* Users can create an account or login to the site via modals that can be launched from the navigational bar. Additionally users are prompted to log in when they try to interact with any feature that requires an account such as marking a film as watched or reviewing a film. 

![alt text](https://i.imgur.com/s1TDxQ0.png)


* Users profile pages at the top offer a count of the total number of reviews and watched movies the user has. 

* The users profile page offers three different views, the main one being a view that offers the last five movies the user marked as watched and the three most recent reviews. The second offers all of the users watched movies and the third offers all of the users reviews. 

### Watched

* Users can mark a movie as watched by clicking on the eye icon on either the movies show page or by hovering over the movies poster and clicking on the smaller eye button to mark that film as watched.

* Once a user has marked that film as watched, they can see the total number of watched films grown on their profile and they can also see that newly watched film listed on their profile. 


### Reviews

![alt text](https://i.imgur.com/8STKHwk.png)

* On opting to review a movie, an animated modal will provide users a text bubble to fill out their opinions of the film.  Users may also provide a rating for the movie, which will get added to the movie’s overall rating display in the index and user profile pages.  Errors display should a reviewer forget to add a rating or write a review that does not fit between 5 and 500 characters.  In order to prevent accidental loss of data, users can only exit out of this modal by clicking on the -x button.

* Reviewers can see their reviews posted in real time in order of creation.  On creation, should a user choose to update or delete a review, they may do so using the trash and pen icons to the upper right.  Editing will provide users with the same modal opened on creation, though both the rating and the text body of the review as is are persisted for easy update.  Deleting provides users with a window alert to confirm they would like to get rid of their post.

* A space is provided for avatar pictures.  Users can then navigate to the profile pages of authors of reviews by clicking on the author’s username.  Next to the author’s username, bright green stars display the rating assigned to the film via the review.

* Additionally, users can view reviews they themselves have previously posted on their user profile page.  A sample is displayed on first visit to the profile page.  An extended collection of posted comments is provided on click of “ALL”

* Users can see their new reviews updated on the index page feed in real time.

### Search

![alt text](https://i.imgur.com/8gumPjA.png)

* Search bar is displayed on the top of the page, it allows users to search for movie titles and actor name. It autocompletes searches to allow a smooth transition to the result show page. It displays different font colors depending on the result type.

### Index Page

![alt text](https://i.imgur.com/QYpfMG7.png)

* Users arrive on the home page.  Here, they can view a range of popular, recently added movies paired with their title, ratings, and posters.  On click in any one of these individual components, they will be taken to a detailed show page for that particular movie.  Below, they can find a range of recent reviews which also link to the associated movie as well as the profile of the review’s author.


* Hovering over each thumbnail provides an outline effect and displays additional possible actions dependent on current logged in status.  If logged out, users are provided with an option to sign in.  If logged in, users can opt to both mark a movie as watched and write up a review.

#### Code Sample

The following is code we used to render the CSS for average raiting for each film displayed on the index page

` rating(){
        let sum = 0
        let count = 0
        this.props.movie.reviews.forEach(review => {
            
            if (review.rating){
                count += 1
                sum += parseInt(review.rating.$numberDecimal)
            }
        });
        return (sum/count)
        
    }

    ratingStar(){
        let rating = this.rating()
        if (rating > 0 && rating < 1){
            return (
                <div className={'ratingHlf'}>1/2</div>
            )
        } else if (rating >= 1 && rating < 1.5) {
            
            return (<div className={'ratingOne'}>1</div>)

        } else if (rating >= 1.5 && rating < 2){
            
            return (<div className={'ratingOneHlf'}>1.5</div>)

        } else if (rating >= 2 && rating < 2.5){
            
            return (<div className={'ratingTwo'}>2</div>)

        } else if (rating >= 2.5 && rating < 3) {
            
            return (<div className={'ratingTwoHlf'}>2.5</div>)

        } else if (rating >= 3 && rating < 3.5) {
            
            return (<div className={'ratingThree'}>3</div>)

        } else if (rating >= 3.5 && rating < 4) {
            
            return (<div className={'ratingThreeHlf'}>3.5</div>)

        } else if (rating >= 4 && rating < 4.5) {
            
            return (<div className={'ratingFour'}></div>)

        } else if (rating >= 4.5 && rating < 5) {
            
            return (<div className={'ratingFourHlf'}></div>)

        } else if (rating >= 5) {
            
            return (<div className={'ratingFive'}>5</div>)

        } else {
            
            return (<div>No ratings yet</div>)
        }
    }`

### Movies Show Page

![alt text](https://i.imgur.com/Ohx3lYr.png)

* Users can view detailed information on selected movies.  Here, they can view a movie’s title, year, and description.  

* A cast section provides links to profile pages for major actors in the movie.  

* An action panel to the right provides users another option to sign in if logged out, as well as an opportunity to watch and review a movie.  

* To the left, below the poster, users can view an embedded trailer from the show page itself.

### Actors Show Page

* By clicking an actor’s tag on a movie show page, users are navigated to a profile page for said actor.  Here, they can view the actor’s name, headshot, bio, as well as a grid of posters representing the movies they’ve starred in.  

* Hovering over each thumbnail provides the users with yet another way to review and select a movie for watched status.  On clicking any of these thumbnails, users are brought to a movie show page where they can continue to discover new movies and actors.


### Admin Page 


* To ease in the setup of our site, we added a Admin page that can only be accessed via the navigational bar if the current user in marked as an admin. 

* From the Admin page, users can add movies via a movie form that will allow them to input the movies information in a quick and organized fashion. 

* Also from the Admin page users can add Actors via a form that allows the user to add not only the actors information, but also allows them to tag the movies that actor has been in. From that area movies can be added via a modified search container and then removed via a small trashcan icon.



## Group Members & Work Breakdown

Frida Pulido

Gabriel Barrios

Jordan Ackerman

All Three

Day 1 - combined User Auth  

   
Day 2 - Movies table and basic movie page layout

Movie table and connection 
Movies Show Index container
Watched component setup
User Auth corrections

Day 3- watched layout buildup / corrections for movies show

Movies show corrections
Finalizing the watched components
User profile setup
Integrating watched films to user profile



Day 4 - User profile and watched corrections / Reviews table / Reviews front end

User profile and watched corrections
Reviews table 
Reviews component
User profile reviews integration

Day 5 - polish day

Reviews corrections 
Polish features
Seed
README.MD layout
