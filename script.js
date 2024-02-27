
function findMatches(wordToMatch, text){
    const regex = new RegExp(wordToMatch, 'gi');
    const matches =text.match(regex) || [];
    console.log("matches:",matches);
    return matches;
}

function highlightedMatches(text, searchText){
    const regex = new RegExp(searchText, 'gi');
    const highlightedText = text.replace(regex,match=> `<span class="hl">${match}</span>`);
    // console.log("highlighted text:",highlightedText);
    return highlightedText;
}
function displayMatches(){
    const searchText = this.value;
    console.log("search text:",searchText);
    const paragraph= document.getElementById('my_text')
    const paragraph_text=paragraph.textContent;
    // console.log("paragraph:",paragraph);
    const highlightedText = highlightedMatches(paragraph_text, searchText);


paragraph.innerHTML = highlightedText;
const matches =findMatches(searchText,paragraph_text);
const searchResultDiv= document.getElementById('searchResults');
searchResultDiv.innerHTML = `${matches.length} posts were found`;

}

const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);
const clearButton = document.getElementById('clearBtn');
clearButton.addEventListener('click',function() {
    searchInput.value = '';
    displayMatches();
});