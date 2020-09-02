const sotreBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');
const clearBtn = document.getElementById('clear-btn');

const userid = '163';
const user01 = {
    name: 'Mostafa',
    Age: 26,
    Hobbies: ["programming", 'Playing games']
};

sotreBtn.addEventListener('click', () => {
    localStorage.setItem('key', userid);
    localStorage.setItem('user', JSON.stringify(user01));

});

retrBtn.addEventListener('click', () => {
    const extracted = localStorage.getItem('key');
    const extractedUser = localStorage.getItem('user');

    if (extracted && extractedUser) {
        console.log(`Got the Id - ${extracted}`);
        const ParsedUser = JSON.parse(extractedUser);
        console.log(`Got the User: ${ParsedUser.name}`);
        // console.log(ParsedUser);
    } else
        console.log("Couldn't find Id");
});

clearBtn.addEventListener('click', () => {
    localStorage.removeItem('key')
    localStorage.removeItem('user')
});