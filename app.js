const sotreBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');
const clearBtn = document.getElementById('clear-btn');
///////////////session\\\\\\\\\\\\\\
const sotreSBtn = document.getElementById('store-s-btn');
const retrSBtn = document.getElementById('retrieve-s-btn');
const clearSBtn = document.getElementById('clear-s-btn');
const lbl = document.getElementById('lbl');

const user01 = {
    id: 163,
    name: 'Mostafa',
    Age: 26,
    Hobbies: ["programming", 'Playing games']
};

sotreBtn.addEventListener('click', () => {
    localStorage.setItem('user', JSON.stringify(user01));

});

retrBtn.addEventListener('click', () => {
    const extractedUser = localStorage.getItem('user');
    if (extractedUser) {
        const ParsedUser = JSON.parse(extractedUser);
        // lbl.insertAdjacentText("beforeend", `Got the User: ${ParsedUser.name}`)
        lbl.innerText = ` Hello From LocalStorage, Got the User: ${ParsedUser.name}`;
        // console.log(`Got the User: ${ParsedUser.name}`);
        // console.log(ParsedUser);
    } else
        lbl.innerText = `Couldn't find UserName`;
});

clearBtn.addEventListener('click', () => {
    localStorage.removeItem('user')
});
///////session\\\\\\\\\\
sotreSBtn.addEventListener('click', () => {
    sessionStorage.setItem('user', JSON.stringify(user01));

});

retrSBtn.addEventListener('click', () => {
    const extractedUser = sessionStorage.getItem('user');
    if (extractedUser) {
        const ParsedUser = JSON.parse(extractedUser);
        lbl.innerText = ` Hello From Session, Got the User: ${ParsedUser.name}`;
    } else
        lbl.innerText = `Couldn't find UserName`;
});

clearSBtn.addEventListener('click', () => {
    sessionStorage.removeItem('user')
});