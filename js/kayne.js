const loadQoutes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQoutes(data))
}

const displayQoutes = quote => {
    console.log(qoute);
    const qouteElements = document.getElementById('qoute');
    qouteElements.innerText = quote.quote;
}