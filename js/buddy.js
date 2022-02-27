const loadbuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data))
}

loadbuddy()

const displayBuddy = data => {
    const buddies = data.results;
    console.log(buddies);
    const buddiesContainer = document.getElementById('buddies')
    for (const buddy of buddies) {
        console.log(buddy.email)
        const p = document.createElement('p')
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}  Email: ${buddy.email}`
        buddiesContainer.appendChild(p)
    }
}

