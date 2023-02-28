function greetings(greetingHandler ,name){
    greetingHandler(name)
}

// const name = 'Halim Mama'
// const numbers = [45,54,78];

function greetingHandler(name){
    console.log('Good Morning', name)
}


greetings(greetingHandler, 'Tom Hanks')