const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        hpCharacters = [
    {"name":"Productivity for Creatives: Build a System That Brings Out Your Best", "house":"Thomas Frank", "image":"images/course1.png"},
    {"name":"Simple Productivity: How to Accomplish More With Less", "house":"Greg McKeown", "image":"images/course2.png"},
    {"name":"Writing for Self-Discovery: 6 Journaling Prompts for Gratitude and Growth","house":"Yasmine Cheyenne","image":"images/course3.png"},
    {"name":"Do Things, Tell People: The Power of Personal Branding","house":"Hamza Khan","image":"images/course4.png"},
    {"name":"Public Speaking - My Way to Give Presentations Without Fear", "house":"Thomas Frank", "image":"images/course1.png"},
    {"name":"These 5 Productivity Hacks Will Change the Way You Work", "house":"Greg McKeown", "image":"images/course2.png"},
    {"name":"Job interview masterclass: How to get the job you want","house":"Yasmine Cheyenne","image":"images/course3.png"},
    {"name":"Contracting & Self-Employment: Getting Started","house":"Hamza Khan","image":"images/course4.png"},
    {"name":"CV Writing Masterclass", "house":"Thomas Frank", "image":"images/course1.png"},
    {"name":"Life after Furlough; making sure you’re ready for what comes next", "house":"Greg McKeown", "image":"images/course2.png"},
    {"name":"Child Psychology Course","house":"Yasmine Cheyenne","image":"images/course3.png"},
    {"name":"Reboot Your CV Skills","house":"Hamza Khan","image":"images/course4.png"},
    {"name":"How to find a job during uncertain times when you’re unemployed", "house":"Thomas Frank", "image":"images/course1.png"},
    {"name":"Leadership & Management", "house":"Greg McKeown", "image":"images/course2.png"},
    {"name":"Management and Leadership: Growing as a Manager","house":"Yasmine Cheyenne","image":"images/course3.png"},
    {"name":"Innovation Management & Entrepreneurship","house":"Hamza Khan","image":"images/course4.png"},
    {"name":"Global Leadership and Human Resource Management", "house":"Thomas Frank", "image":"images/course1.png"},
    {"name":"Business 101: Real World Lessons They Don't Teach in School", "house":"Greg McKeown", "image":"images/course2.png"},
    {"name":"The Complete Leadership Mastery Course","house":"Yasmine Cheyenne","image":"images/course3.png"},
    {"name":"Complete Willpower Course - Build Self Control & Good Habits","house":"Hamza Khan","image":"images/course4.png"},
    {"name":"The Complete Fitness & Health Masterclass", "house":"Thomas Frank", "image":"images/course1.png"},
    {"name":"Starting Affiliate, and Digital Marketing RIGHT NOW!", "house":"Greg McKeown", "image":"images/course2.png"},
    {"name":"Accounting 101: Learn The Proper Year End Financial Close","house":"Yasmine Cheyenne","image":"images/course3.png"},
    {"name":"How to sell on Instagram: marketing for online sales via DM","house":"Hamza Khan","image":"images/course4.png"},
]
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
