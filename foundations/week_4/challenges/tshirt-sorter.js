/////// T-shirt Sorter ////////

function tshirtSorter(sizesStr) {
    let order = {s: 1, m: 2, l: 3}
    return Array.from(sizesStr).sort((size1, size2) => order[size1] - order[size2]).join('')
}

console.log(tshirtSorter(`smllms`))

// >>> tshirtSorter('lms')
// // sml

// >>> tshirtSorter('smllms')
// // ssmmll

const whyDoesJavaScriptLetMeDoThisWithWarningsOrErrors = (anyString,
    anyArray) => {
    
    anyString[0] = `ha ha ha - I'm NOT going to let you do this without` +
        `errors.`;

    anyArray[0] = `Ha ha ha - I AM going to let you do this`;
    
    return anyString;
    
}    
const anyArray = [`You are clueless`]; 
const message = whyDoesJavaScriptLetMeDoThisWithWarningsOrErrors(`You are a fool!`, anyArray); 
console.log(message, anyArray);