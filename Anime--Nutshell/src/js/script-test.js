// ./js/script.js

const characters = [
    {
        name: "Naruto",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7k6tuiz8A32oKrWyRIGnRcJkcwW4bR-eUA&s",
        personal: "Shinobi of Konohagakure, member of Team 7, future Hokage.",
        about: "Naruto Uzumaki is the main protagonist of Naruto. He was shunned in childhood for being the host of Kurama, the Nine-Tails. Despite hardships, he never gave up on his dream of becoming Hokage.",
        powers: "Shadow Clone Jutsu, Rasengan, Sage Mode, Kurama Chakra Mode.",
        series: "Naruto, Naruto Shippuden, Boruto: Naruto Next Generations"
    },
    {
        name: "Saitama",
        image: "https://i.pinimg.com/564x/b8/3d/0d/b83d0d82bfd7b0df28e4e4b1b0a145c2.jpg",
        personal: "Also known as One Punch Man. Lives in City Z.",
        about: "Saitama is a hero who trained so hard he lost all his hair. He can defeat any enemy with a single punch but suffers from boredom due to his overwhelming power.",
        powers: "Infinite Strength, One Punch Kill, Unmatched Speed.",
        series: "One Punch Man"
    },
    {
        name: "Sung Jin Woo",
        image: "https://preview.redd.it/will-we-see-atleast-a-glimpse-of-sung-jin-woo-in-action-in-v0-ms73r0sfduuc1.jpeg?width=640&crop=smart&auto=webp&s=19aa267029a5c50e39d27274c2e8d23b6e35c0dc",
        personal: "Weakest hunter turned Shadow Monarch.",
        about: "Sung Jin Woo started as the weakest hunter in the world, but after surviving a deadly dungeon, he received a mysterious System that let him level up without limit.",
        powers: "Shadow Extraction, Shadow Army Command, Dagger Mastery, Immortality as Shadow Monarch.",
        series: "Solo Leveling (Webtoon, Anime)"
    },
    {
        name: "Goku",
        image: "https://miro.medium.com/1*rTr3xTZhxGJug-ioTu4G4A.jpeg",
        personal: "Saiyan raised on Earth, loves fighting strong opponents.",
        about: "Son Goku is the main protagonist of Dragon Ball. Originally sent to Earth as an infant, he became one of the greatest warriors, defending the planet from powerful enemies.",
        powers: "Kamehameha, Super Saiyan Transformations, Ultra Instinct.",
        series: "Dragon Ball, Dragon Ball Z, Dragon Ball Super"
    },
    {
        name: "Light Yagami",
        image: "https://img.goodfon.com/wallpaper/big/c/47/death-note-light-yagami-kira-3405.webp",
        personal: "Genius high school student who discovers the Death Note.",
        about: "Light Yagami is a brilliant but disillusioned young man who gains a supernatural notebook that kills anyone whose name is written in it. He adopts the persona 'Kira' to enforce his sense of justice.",
        powers: "Death Note (kills anyone by writing their name), Intelligence, Manipulation.",
        series: "Death Note"
    }
];

const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const results = document.getElementById("results");

function renderCharacter(character) {
    results.innerHTML = `
    <div class="result">
      <img src="${character.image}" alt="${character.name}">
      <div class="info">
        <h2>${character.name}</h2>
        <div class="section"><strong>Personal:</strong> ${character.personal}</div>
        <div class="section"><strong>About:</strong> ${character.about}</div>
        <div class="section"><strong>Powers:</strong> ${character.powers}</div>
        <div class="section"><strong>Series:</strong> ${character.series}</div>
      </div>
    </div>
  `;
}

function doSearch() {
    const query = input.value.trim().toLowerCase();           // <-- use .value
    if (!query) {
        results.innerHTML = `<p>Please type a character name (e.g. Naruto).</p>`;
        return;
    }

    // partial, case-insensitive match
    const character = characters.find(c => c.name.toLowerCase().includes(query));

    if (!character) {
        results.innerHTML = `<p>No character found. Try Naruto, Saitama, Goku, Sung Jin Woo or Light Yagami.</p>`;
        return;
    }

    renderCharacter(character);
}

// Enter key triggers search
input.addEventListener("keydown", e => {
    if (e.key === "Enter") doSearch();
});

// Click icon triggers search & focuses the input
btn.addEventListener("click", () => {
    input.focus();
    doSearch();
});
