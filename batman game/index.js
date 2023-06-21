const quizs = [
  {
    questions: "Quel est l’autre nom de l’Homme-Mystère ?",
    choices: ["Le Sphinx", "Saphir", "Le Joker"],
    image: "../Illustrations/Batgame_3.png",
  },

  {
    questions: "Quelle est l’ancienne profession de Harley Quinn ?",
    choices: ["Infirmière", "Psychiatre", "Dentiste"],
    image: "../illustrations/Batgame_4.png",
  },

  {
    questions: "Quel est l’objet fétiche de Double Face ?",
    choices: ["Une pièce", "Un livre", "Un couteau"],
    image: "../illustrations/Batgame_5.png",
  },

  {
    questions: "Qui a produit Batman en 1964 ?",
    choices: ["Stanley Kubrick", "Andy Warhol", "Peter Jackson"],
    image: "../illustrations/Batgame_6.png",
  },

  {
    questions: "Batman c’est aussi le nom d’une ville en...",
    choices: ["Turquie", "Islande", "Allemagne"],
    image: "../illustrations/Batgame_7.png",
  },

  {
    questions:
      "Quel vilain apparaît pour la première fois dans le Batman 232 ? ",
    choices: ["Le Pingouin", "Ra’s al Ghul", "Poison Ivy"],
    image: [
      "../illustrations/Batgame_8.png",
      "../illustrations/Batgame_9.png",
      "../illustrations/Batgame_9-1.png",
    ],
  },

  {
    questions: "Quelle ville Batman défend-il ?",
    choices: ["Gotham City", "Starling City", "Hell’s Kitchen"],
    image: "../illustrations/Batgame_10.png",
  },

  {
    questions: "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
    choices: ["Georges Clooney", "Val Kilmer", "Mickael Keaton"],
    image: "../illustrations/Batgame_11.png",
  },

  {
    questions: "Dans son premier Batman (1989) Jack Nicholson jouait :",
    choices: ["Le Pingouin", "L’Homme Mystère", "Le Joker"],
    image: [
      "../illustrations/Batgame_11.png",
      "../illustrations/Batgame_12.png",
      "../illustrations/Batgame_13.png",
      "../illustrations/Batgame_13-1.png",
    ],
  },

  {
    questions: "Qui est Jonathan Crane ? ",
    choices: ["L Épouvantail", "Le Jocker", "Hugo Strange"],
    image: [
      "../illustrations/Batgame_14.png",
      "../illustrations/Batgame_15.png",
      "../illustrations/Batgame_16.png",
    ],
  },

  {
    questions:
      "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022)",
    choices: ["Emma Watson", "Gigi Hadid", "Lola Iolani Momoa", "Zoë Kravitz"],
    image: "../illustrations/Batgame_17.png",
  },

  {
    questions: "Quel est le prénom des parents du jeune Bruce Wayne ?",
    choices: ["Thomas et Martha", "Elaine et Georges", "Martha et James"],
    image: "../illustrations/Batgame_18.png",
  },

  {
    questions: "Qui interprète le Joker en 2008 ?",
    choices: ["Heath Ledger", "Haeth Ledger", "Heath Ledger"],
    image: "../illustrations/Batgame_19.png",
  },

  {
    questions: "En quelle année Robin fait il sa première apparition ?",
    choices: [" 1940", "1936", "1941"],
    image: "../illustrations/Batgame_20.png",
  },

  {
    questions: "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
    choices: ["Oracle", "Huntress", "Black Canary"],
    image: "../illustrations/Batgame_21.png",
  },
];

//const imageElement = document.getElementById("image");
const IndexElement = document.getElementById("to-bottom-icon");
const detailElement = document.getElementById("detail");
const choicesContainer = document.getElementById("choices");
const buttonElement = document.getElementById("next-button");
const sectionQuiz = document.getElementById("quiz");

// initial state
let quizID = -1;
let quiz = quizs[0];
const imagesPopup = [
  "../Illustrations/POP UP RESULTATS QUIZ-1.png",
  "../Illustrations/POP UP RESULTATS QUIZ-2.png",
  "../Illustrations/POP UP RESULTATS QUIZ.png",
];

function displayQuiz() {
  // display index of quiz
  IndexElement.innerHTML = `${quizID + 1}/${quizs.length}`;

  //display question
  detailElement.innerHTML = `
  <h2 id="question">${quiz.questions}</h2>
  <img id="image" src="${
    typeof quiz.image === "string" ? quiz.image : quiz.image[0]
  }" alt="quiz_image" />`;

  // Display choice elements
  const choicesElements = `
  <div class="choice">
    <input type="radio" name="opt" id="opt1" />
    <label for="opt1">${quiz.choices[0]}</label>
  </div>

  <div class="choice">
    <input type="radio" name="opt" id="opt2" />
    <label for="opt2">${quiz.choices[1]}</label>
  </div>

  <div class="choice">
    <input type="radio" name="opt" id="opt3" />
    <label for="opt3">${quiz.choices[2]}</label>
  </div>
  `;
  choicesContainer.innerHTML = choicesElements;
}

function setNextQuiz() {
  if (quizID < quizs.length - 1) {
    quizID++;
    quiz = quizs[quizID];
    displayQuiz();
  } else {
    const randomID = Math.round(2 * Math.random());
    sectionQuiz.innerHTML = `<a href="/batman game/index.html"><img src="${imagesPopup[randomID]}" alt="popup"/></a>`;
  }
}

buttonElement.addEventListener("click", (e) => {
  buttonElement.innerText = "QUESTION SUIVANTE";
  if (buttonElement.innerText.toUpperCase() == "QUESTION SUIVANTE")
    setNextQuiz();
});
