const boxNumber = 16;
const container = document.querySelector('.container');
const resetBtn = document.createElement('button');
resetBtn.classList.add('resetBtn');
resetBtn.textContent = 'Reset the Grid';
document.body.insertBefore(resetBtn, container);
//Initial Grid.
createGrid(boxNumber);

function changeColor(e) {
  let randomColorHue = Math.floor(Math.random() * 360) + 1;
  e.target.style.backgroundColor = `hsl(${randomColorHue}, 100%, 50%)`;
}
function resetGrid() {
  const boxlist = document.querySelectorAll('.gridbox');
  boxlist.forEach((box) => box.remove());
  getUserInput();
}
resetBtn.addEventListener('click', resetGrid);

function getUserInput() {
  const userChoice = +prompt('Enter a number: ');
  if (userChoice < 100) {
    customGrid(userChoice);
  } else {
    alert("You've entered a number higher than 100");
  }
}
function createGrid(count) {
  container.style.cssText = `grid-template: repeat(${count}, 1fr) / repeat(${count}, 1fr)`;
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      let newDiv = document.createElement('div');
      newDiv.classList.add('gridbox');
      newDiv.addEventListener('mouseover', changeColor);
      container.appendChild(newDiv);
    }
  }
}
