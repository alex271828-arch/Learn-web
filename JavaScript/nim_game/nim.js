const piles = [3, 4, 5];
const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'];

const pilesContainer = document.getElementById('piles');
const statusEl = document.getElementById('status');
const endTurnBtn = document.getElementById('end-turn');

let currentPlayer = 1;
let selectedPile = null;
let stonesRemoved = 0;

function render() {
  pilesContainer.innerHTML = '';

  piles.forEach((count, index) => {
    const pileDiv = document.createElement('div');
    pileDiv.className = 'pile';
    pileDiv.dataset.index = index;

    for (let i = 0; i < count; i++) {
      const stone = document.createElement('span');
      stone.className = 'stone';
      stone.style.backgroundColor = colors[index % colors.length];
      stone.addEventListener('click', () => handleStoneClick(index, stone));
      pileDiv.appendChild(stone);
    }

    pilesContainer.appendChild(pileDiv);
  });
}

function handleStoneClick(pileIndex, stoneEl) {
  if (selectedPile === null) {
    selectedPile = pileIndex;
  }

  if (selectedPile !== pileIndex) {
    return;
  }

  stoneEl.remove();
  piles[pileIndex]--;
  stonesRemoved++;
  endTurnBtn.disabled = false;

  if (totalStones() === 0) {
    statusEl.textContent = `Player ${currentPlayer} wins!`;
    endTurnBtn.disabled = true;
    disableAllStones();
  }
}

function disableAllStones() {
  pilesContainer.querySelectorAll('.stone').forEach((stone) => {
    stone.style.pointerEvents = 'none';
  });
}

function endTurn() {
  if (stonesRemoved === 0) return;
  selectedPile = null;
  stonesRemoved = 0;
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  statusEl.textContent = `Player ${currentPlayer}'s turn`;
  endTurnBtn.disabled = true;
}

function totalStones() {
  return piles.reduce((a, b) => a + b, 0);
}

endTurnBtn.addEventListener('click', endTurn);
render();
