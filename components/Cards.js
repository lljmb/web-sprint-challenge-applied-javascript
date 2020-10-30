// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//

//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


const entryPoint = document.querySelector('.cards-container')

function makeArt( artObj  /* what data does the panel need? */) {
 

    // TASK 5- Instantiate all the elements needed for a panel
  
    const panel = document.createElement('div');
    const tagline = document.createElement('div');
    const authorContent = document.createElement('div');
    const authorImg = document.createElement('div');
    const authorLink = document.createElement('img'); // make detached img tag
    const authorName = document.createElement('span')

  
    
  
    // TASK 6- Setup the structure of our elements
  
    panel.appendChild(tagline);
    panel.appendChild(authorContent);
    authorContent.appendChild(authorImg);
    authorImg.appendChild(authorLink);
    authorContent.appendChild(authorName);
  


    // <div class="card"> // panel
    //   <div class="headline">{Headline of article}</div> // headine 
    //   <div class="author"> // authorContent 
    //     <div class="img-container"> // authorImg
    //       <img src={url of authors image} /> authorLink
    //     </div>
    //     <span>By {author's name}</span> authorName
    //   </div>
    // </div>
  
  
    // TASK 7- Add proper class names to our elements (See index.html for reference)
  
    panel.classList.add('card');
    tagline.classList.add('headline');
    authorContent.classList.add('author');
    authorImg.classList.add('img-container');
    authorLink.classList.add('img');
    authorName.classList.add('span');

    // TASK 8- Set text content using arguments as raw material
    tagline.textContent = artObj.headline;
    authorContent.textContent = `By ${artObj.authorName}`;
    authorLink.src = artObj.authorPhoto;

  
  
    // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
    //  - the open button needs to go away (the 'hide-btn' class name controls this)
    //  - the close button needs to show (the 'hide-btn' class name controls this)
    //  - the contents need to show (the 'toggle-on' class name controls this)
    tagline.addEventListener('click', (event) => {
    console.log(`user clicked the '${event.target.textContent}' article `)
  });
  
    // don't forget to return the panel!'
    return panel; 
  }

 makeArt('https://lambda-times-api.herokuapp.com/articles')

  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then((response) => {
      const javaArticles = response.data.articles.javascript;
      javaArticles.forEach((article) => {
            entryPoint.appendChild(makeArt(article));
      }) 
    
      const bootArticles = response.data.articles.bootstrap;
      bootArticles.forEach((article) => {
            entryPoint.appendChild(makeArt(article));
      })

      const techArticles = response.data.articles.technology;
      techArticles.forEach((article) => {
            entryPoint.appendChild(makeArt(article));
      })

      const jqArticles = response.data.articles.jquery;
      jqArticles.forEach((article) => {
            entryPoint.appendChild(makeArt(article));
      })

      const nodeArticles = response.data.articles.node;
      nodeArticles.forEach((article) => {
            entryPoint.appendChild(makeArt(article));
      })
    
    
    
    })

  .catch( err => {
      console.log(err, 'something went terribly wrong')
  })