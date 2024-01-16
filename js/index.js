const quots = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => quotsSet(data))
        
}


const quotsSet = (quots) => {
    console.log(quots)
    const blockquote = document.getElementById('blockquote');
    blockquote.innerHTML = 
        `<h1>Quotes from kanye</h1>
        <h2>${quots.quote}</h2>
        `
}