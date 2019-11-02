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
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

const cards = document.querySelector('.cards-container');

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then ( response => {
    console.log(response);
    const articleData = response.data.articles; 
    const articleArray = Object.values(articleData);
    articleArray.forEach(articleData => {
        articleData.forEach(element => {
          let newArticle = createCard(element);
          cards.appendChild(newArticle);
        });
    });

})

function createCard(object) {

  const card = document.createElement('div'); 
  const headline = document.createElement('div'); 
  const authorContent = document.createElement('div'); 
  const imgContainer = document.createElement('div'); 
  const cardImg = document.createElement('img'); 
  const credit = document.createElement('span'); 

  card.appendChild(headline);
  card.appendChild(authorContent);
  authorContent.appendChild(imgContainer);
  imgContainer.appendChild(cardImg);
  imgContainer.appendChild(credit);

  card.classList.add('.card');
  authorContent.classList.add('.author');
  headline.classList.add('.headline');
  imgContainer.classList.add('.img-container');

  headline.textContent = (object.headline); 
  cardImg.src = (object.authorPhoto); 
  credit.textContent = (object.authorName); 

  return card;
}




















// function createCard (card, headline, author, imagecontainer, image, madeby){
// axios.get("https://lambda-times-backend.herokuapp.com/articles")
// .then( response => {
//     console.log(response.data.articles);
//     const articles = response.data.articles;
//     const articleKeys = Object.keys(articles);
//     console.log(articleKeys);
//     articleKeys.forEach( (elements) => {
//         console.log(articles[elements]);
//         articles[elements.forEach( (e) => {
//             document.querySelector(".cards-container").append(createCard(e));
//         })
//         ]}); return articles 
// });
// }; 

// createCard(articles); 




//experiment below
// function createCard (card, headline, author, imagecontainer, image, madeby){
// axios.get("https://lambda-times-backend.herokuapp.com/articles").then (response=>{
//     console.log(response.data.articles); 
//     let articles = (response.data.articles); 
//     let articleKeys = Object.keys(articles); 
//     console.log(articleKeys);
//         for(articles in response.data) {

//         let card = document.createElement('div'); 
//         card.classList.add('.card'); 
 
//         let headline = document.createElement('div'); 
//         headline.classList.add('.headline'); 
//         card.appendChild(headline); 

//         let author = document.createElement('div'); 
//         author.classList.add('.author'); 
//         card.appendChild(author); 
        
//         let imagecontainer = document.createElement('div'); 
//         imagecontainer.classList.add('.img-container'); 
//         card.appendChild(imagecontainer); 

//         let image = document.createElement('img'); 
//         image.setAttribute=('src', 'articles.authorPhoto');
//         imagecontainer.appendChild(image); 

//         let madeby = document.createElement('span'); 
//         madeby.setAttribute=('articles.authorName');
        
//         console.log(madeby); 
//         return card; 
    
//     }
//          document.querySelector('.cards-container').appendChild(card); 
// });     

// }; 

// createCard(card, headline, author, imagecontainer, image, madeby)