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
// axios.get("https://lambda-times-backend.herokuapp.com/articles")
// .then( response => {
//     console.log(response.data.articles);
//     const articles = response.data.articles;
//     const articleKeys = Object.keys(articles);
//     console.log(articleKeys);
//     articleKeys.forEach( (ele) => {
//         console.log(articles[ele]);
//         articles[ele].forEach( (ele) => {
//             document.querySelector(".cards-container").append(MakeCard(ele));
//         });
//     });

// })


// CreateCard(items){
// axios.get("https://lambda-times-backend.herokuapp.com/articles").then (response=>{
//     console.log(response.data.articles); 
//     const articles = (response.data.articles); 
//     const articleKeys = Object.keys(articles); 
//     console.log(articleKeys); 
//     articleKeys.forEach((items) => {
//             articles[items].forEach ((item) =>{
//                 document.querySelector('.cards-container').append(CreateCard(items)); 
//             }); 
//     });      
    
// }); 
// };   

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
         document.querySelector('.cards-container').appendChild(newCard); 
})   

