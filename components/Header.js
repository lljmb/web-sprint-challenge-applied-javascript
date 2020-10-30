// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const lambdaHeader = document.querySelector('.header-container');


function makeHeader() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const temp = document.createElement('span');

    header.appendChild(date);
    header.appendChild(headerTitle);
    header.appendChild(temp);
   
    header.classList.add('header');
    headerTitle.classList.add('h1');
    date.classList.add('date');
    temp.classList.add('temp'); 

    headerTitle.textContent = 'Lambda Times';
    date.textContent = 'March 28, 2020';
    temp.textContent = '98°'


    return header 
}

const newHeader = makeHeader();

lambdaHeader.appendChild(newHeader);
console.log(lambdaHeader);
