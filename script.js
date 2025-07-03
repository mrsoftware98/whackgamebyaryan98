const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
let score = 0;
let activeMole;
let moleInterval;

// Create 9 holes
for (let i = 0; i < 9; i++) {
  const hole = document.createElement('div');
  hole.classList.add('hole');

  const mole = document.createElement('div');
  mole.classList.add('mole');

  mole.addEventListener('click', () => {
    if (mole === activeMole) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
      mole.style.display = 'none';
      activeMole = null;
    }
  });

  hole.appendChild(mole);
  gameBoard.appendChild(hole);
}

const holes = document.querySelectorAll('.hole .mole');

function startGame() {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  clearInterval(moleInterval);

  moleInterval = setInterval(() => {
    holes.forEach(mole => mole.style.display = 'none');
    const index = Math.floor(Math.random() * holes.length);
    holes[index].style.display = 'block';
    activeMole = holes[index];
  }, 800);
}
