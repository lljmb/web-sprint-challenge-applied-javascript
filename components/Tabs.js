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

function createTab(topic){
    const makeTab = document.createElement('div');
    makeTab.classList.add('tab');
    makeTab.textContent = topic;

    return makeTab
}

axios
.get('https://lambda-times-api.herokuapp.com/topics')
.then(res => {
    // access the topics array from the api
    const topics = res.data.topics;
    // loop over the array
    topics.forEach(topic => {
        const newTab = createTab(topic);
        entryPoint.appendChild(newTab);
    })

    console.log('done');
})
.catch(err => {
    console.log('error', err)
})