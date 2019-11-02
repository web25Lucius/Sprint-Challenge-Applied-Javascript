// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//

//
// Create a card for each of the articles and add the card to the DOM.

function createCard (card, headline, author, imagecontainer, image, madeby){
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then( response => {
    console.log(response.data.articles);
    const articles = response.data.articles;
    const articleKeys = Object.keys(articles);
    console.log(articleKeys);
    articleKeys.forEach( (elements) => {
        console.log(articles[elements]);
        articles.forEach( (e) => {
            document.querySelector(".cards-container").append(createCard(e));
        })
        }); 
})}; 

createCard(); 