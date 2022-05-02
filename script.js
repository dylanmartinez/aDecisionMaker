const tagsElement = document.getElementById('tags')
const textArea = document.getElementById('textarea')

textArea.focus() //automatically puts curser in textarea


function createTags(input) {
    const tags = input.split(',') // turns input into an array that splits into seperate objects separated ny commas
                        .filter(tag => tag.trim() !== '') // trims out any empty spaces
                        .map(tag => tag.trim()) // Not sure yet
    
    tagsElement.innerHTML = ''

    tags.forEach(tag => {
        const singleTag = document.createElement('span') // creates a new <span> element
        singleTag.classList.add('tag') // adds class="tag" to <span>
        singleTag.innerText = tag // creates tag as you type
        tagsElement.appendChild(singleTag) // places <span> element under tags element (<div id="tags">)
    })
};


textArea.addEventListener('keyup', (e) => { // 'e' is event parameter
    createTags(e.target.value) // will be whatever we type in

    if(e.key === 'Enter') { //click enter for random selection
        setTimeout(() => {
            e.target.value = '' //clears input value
        }, 10)
        
        randomSelect() //calls code below

    }
});


function randomSelect() { //random choice picker
    const times = 30 //amount of times it will highlight


    //starts
    const interval = setInterval(() => {
        const randomTag = pickRandomTag() //calls code below, starts by picking a random tag

        highlightTag(randomTag) //highlights a tag by adding a class of "highlight"

        setTimeout(() => {
            unHighlightTag(randomTag) //unhighlights by removing class of "highlight"
        }, 100)
    }, 100);


    //stops
    setTimeout(() => { //stops the random highlighting and picks a random tag to stop on and highlight
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag() //calls code below, starts by picking a random tag

            highlightTag(randomTag) //highlights a tag by adding a class of "highlight"
        }, 100)
    }, times * 100) 

};


function pickRandomTag() {
    const allTags = document.querySelectorAll('.tag')
    return allTags[Math.floor(Math.random() * allTags.length)] //picks a random tag
}

function highlightTag(tag) {
    tag.classList.add('highlight') //highlights a tag by adding a class of "highlight"
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight') //unhighlights a tag by removing "highlight" class
}

//it would be cool to reselect again by pressing enter again?
//what if we were able to add to our current selection?