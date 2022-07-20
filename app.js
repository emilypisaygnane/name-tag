const nameInput = document.getElementById('name-input');
const enterButton = document.getElementById('button');
const nameDiv = document.getElementById('name');

nameInput.addEventListener('input', () => {
  console.log('name change');
});

function click() {
  console.log('clicked');
}

enterButton.addEventListener('click', () => {
  console.log('clicking');

const value = nameInput.value;
  console.log(value);

  nameDiv.textContent = value;
});