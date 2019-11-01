// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get("https://lambda-times-backend.herokuapp.com/articles").then (response=>{
    // console.log(response.data.articles); 
    for(articles in response.data) {
        let newCard = document.createElement('div'); 
        newCard.classList.add('.card'); 
 
        let newHeadline = document.createElement('div'); 
        newHeadline.classList.add('.headline'); 
        newCard.appendChild(newHeadline); 

        let newAuthor = document.createElement('div'); 
        newAuthor.classList.add('.author'); 
        newCard.appendChild(newAuthor); 
        
        let newImgContainer = document.createElement('div'); 
        newImgContainer.classList.add('.img-container'); 
        newCard.appendChild(newImgContainer); 

        let newImg = document.createElement('img'); 
        newImg.setAttribute=('src', 'articles.authorPhoto');
        newImgContainer.appendChild(newImg); 

        let newAuthorName = document.createElement('span'); 
        newAuthorName.setAttribute=('articles.authorName');
        
        console.log(newAuthorName); 
        return newCard; 
    
    }
         document.querySelector('.card-container').appendChild(newCard); 
})   



