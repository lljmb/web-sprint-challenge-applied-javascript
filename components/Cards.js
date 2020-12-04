// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function createArticle(artObj){
    // setting up basic scaffolding
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const authorImgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(authorDiv);
    authorDiv.appendChild(authorImgContainer);
    authorImgContainer.appendChild(authorImg);
    authorDiv.appendChild(authorName);

    // setting class names & content 
    card.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    authorImgContainer.classList.add('img-container');

    headline.textContent = artObj.headline;
    authorName.textContent = `By ${artObj.authorName}`;
    authorImg.src = artObj.authorPhoto;

    // adding the listener event
    card.addEventListener('click', e => {
        console.log(`user clicked on ${headline.textContent}`) 
    }
    )

    // dont forget to return tehehe
    return card
};

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
    const articles = res.data.articles;
    const javaArticles = articles.javascript;
    const bootArticles = articles.bootstrap;
    const techArticles = articles.technology;
    const jqArticles = articles.jquery;
    const nodeArticles = articles.node;
    
    javaArticles.forEach(article => {

        const newJavaArticle = createArticle(article);
        document.querySelector('.cards-container').appendChild(newJavaArticle);
    });
    bootArticles.forEach(article => {
         const newBootArticle = createArticle(article);
         document.querySelector('.cards-container').appendChild(newBootArticle)
    });
    techArticles.forEach(article => {
         const newTechArticle = createArticle(article);
         document.querySelector('.cards-container').appendChild(newTechArticle);
    });
    jqArticles.forEach(article => {
        const newJqArticle = createArticle(article);
        document.querySelector('.cards-container').appendChild(newJqArticle);
    });
    nodeArticles.forEach(article => {
        const newNodeArticle = createArticle(article);
        document.querySelector('.cards-container').appendChild(newNodeArticle);
    })

})
.catch(err => {
    console.log('error', err)
})