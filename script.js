// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.
// 1. Select the collection and preference controls.
const $collection = document.getElementById("collection");
const $theme = document.getElementById("theme");
const $layout = document.getElementById("layout");
const $status = document.getElementById("status");
// Conitnuing the consts from html for the step 4
const $storageKey = "mtm6302-a4-preferences";

// 2. Use a loop to generate the creature entries. See START-HERE.md for markup.
/* I was not able to find a START-HERE.md so I saw the ASSIGNMENT.md and README.md  if it's not a problem. */
for (const $creature of $creatures) {
    const $creatureHTML = `
  <li class="creature">
    <img src="${$creature.image}" alt="${$creature.alt}">
    <div class="creature-info">
      <h3>${$creature.name}</h3>
      <p class="creature-description">${$creature.description}</p>
    </div>
  </li>
`;

  $collection.innerHTML += $creatureHTML;
}

// 3. Listen for changes to each preference control and update the appearance.
/* Changing the habitat theme and its features */
$theme.addEventListener("change", function() {
    document.body.setAttribute("data-theme", $theme.value);
    savePreferences() /* calling the function created to save the preferences chosen for the theme */
});

/* Organizing the cards accodring to each layout provided */
$layout.addEventListener("change", function() {
    $collection.setAttribute("data-layout", $layout.value);
    savePreferences() /* calling the function created to save the preferences chosen for the cards layout */
});

// 4. Save both selected preferences to Local Storage.
function savePreferences() {
    const $preferences = {
        theme: $theme.value,
        layout: $layout.value
    };

    localStorage.setItem($storageKey, JSON.stringify($preferences)); /* just to remind me: this is just to tell that I want to save the preferences in the local storage, that's why I am setting an item, after to save these preferences I should get the item on local storage */
}

// 5. Check for saved data on load and restore the controls and appearance.
const $savedPreferences = localStorage.getItem($storageKey);
if ($savedPreferences !== null) { /* when there is no saved preferences it turns null, and !== verify if the result is different than null */
  const $preferences = JSON.parse($savedPreferences);
  $theme.value = $preferences.theme;
  $layout.value = $preferences.layout;
  /* until now (above) I was just setting the data but nothing visual yet */
  document.body.setAttribute("data-theme", $preferences.theme);
  $collection.setAttribute("data-layout", $preferences.layout);
  /* now I'm setting the preferences to be visible in the page, to change the appearence based on what I chose in the page */
}
// Add short pseudocode comments before writing each feature.
