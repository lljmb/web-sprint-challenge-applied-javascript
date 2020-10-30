// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const entryPoint = document.querySelector('.topics')

function makeTab({ tabURL }) {
    const tab = document.createElement('div');
    const tabElement = document.createElement('a'); // make detached a tag
    tabElement.src = tabURL; // set src property to become the tagg we passed in
    
    tab.classList.add('topics');
    tab.appendChild(tabElement)
  
    return tab
};

axios
.get('https://lambda-times-api.herokuapp.com/topics')
.then(newTab => {
    const tabs = newTab.data.topics;
    tabs.forEach(tab => {
        let topic = makeTab(tab);
       entryPoint.appendChild(topic);
        console.log(makeTab('https://lambda-times-api.herokuapp.com/topics'))
    })
})
.catch(error => {
    console.log('something broke', error);
})
.finally(() => {
    console.log('done');
})


