
/* =================================
   THE HAUNTED HAVELI
   GAME INTERACTIONS
================================= */

// ROOM INFORMATION

const rooms = {
  bedroom: {
    title: "THE LOCKED BEDROOM",
    clue: "Broken Anklet",
    description:
      "You enter a forgotten royal bedroom. Beside an antique mirror, you discover a broken silver anklet. It appears to belong to the palace's legendary dancer."
  },

  dance: {
    title: "THE ROYAL DANCE HALL",
    clue: "Royal Dance Record",
    description:
      "An old performance record reveals that Manjulika was once celebrated as the finest dancer in the royal court. Her final performance was never recorded."
  },

  passage: {
    title: "THE SECRET PASSAGE",
    clue: "Hidden Royal Letter",
    description:
      "Behind a cracked wall, you uncover a secret letter. It suggests that the dancer's story was deliberately erased from the palace records."
  }
};

// STORE DISCOVERED CLUES

let discoveredClues = [];

// ENTER PALACE BUTTON

function enterPalace() {
  document.getElementById("explore").scrollIntoView({
    behavior: "smooth"
  });
}

// INVESTIGATE A ROOM

function discoverRoom(roomName) {

  const room = rooms[roomName];

  if (!room) {
    return;
  }

  // Display room information

  document.getElementById("discovery-title").textContent =
    room.title;

  document.getElementById("discovery-text").textContent =
    room.description;

  // Add clue only once

  if (!discoveredClues.includes(roomName)) {

    discoveredClues.push(roomName);

    updateClueCollection();

  } else {

    document.getElementById("discovery-text").textContent +=
      " You have already collected this clue.";

  }

}

// UPDATE CLUE COLLECTION

function updateClueCollection() {

  const clueList = document.getElementById("clue-list");

  clueList.innerHTML = "";

  Object.keys(rooms).forEach(roomName => {

    const clue = document.createElement("span");

    if (discoveredClues.includes(roomName)) {

      clue.className = "unlocked-clue";

      clue.textContent = "✓ " + rooms[roomName].clue;

    } else {

      clue.className = "locked-clue";

      clue.textContent = "🔒 UNKNOWN CLUE";

    }

    clueList.appendChild(clue);

  });

  // Update counter

  document.getElementById("clue-status").textContent =
    "CLUES DISCOVERED: " +
    discoveredClues.length +
    " / 3";

  // Unlock final mystery

  if (discoveredClues.length === 3) {

    document.getElementById("final-message").textContent =
      "All three clues have been recovered. The truth is ready to be revealed.";

    document.getElementById("reveal-btn").disabled = false;

    document.getElementById("reveal-btn").textContent =
      "UNLOCK THE TRUTH ↗";

  }

}

// MANJULIKA'S DIARY

const diaryEntries = [

  "They locked the doors, but they could never silence my soul...",

  "I danced for the royal court. Every step carried a dream of freedom.",

  "My anklets remember every performance. My heart remembers every injustice.",

  "Ami Je Tomar... My story shall never be forgotten."

];

let diaryIndex = 0;

function nextDiary() {

  diaryIndex++;

  if (diaryIndex >= diaryEntries.length) {
    diaryIndex = 0;
  }

  document.getElementById("diary-text").textContent =
    '"' + diaryEntries[diaryIndex] + '"';

  document.getElementById("diary-count").textContent =
    "ENTRY 0" + (diaryIndex + 1) + " / 04";

}

// REVEAL FINAL MYSTERY

function revealMystery() {

  if (discoveredClues.length !== 3) {
    return;
  }

  const revelation =
    document.getElementById("revelation");

  revelation.classList.remove("hidden");

  revelation.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  document.getElementById("reveal-btn").textContent =
    "MYSTERY SOLVED ✓";

}

// INITIALIZE WEBSITE

console.log("The Haunted Haveli is ready.");

console.log("Welcome, investigator.");

