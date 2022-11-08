const addGameButton = document.getElementById('add-game-btn');

function createNextRow(array) {
	let p = document.createElement('p');
	let tableBody = document.getElementById('game-table-body');
	let tableRow = tableBody.insertRow();
	let titleCell = tableRow.insertCell();
	let text = document.createTextNode('This just got added');

	p.appendChild(text);

	titleCell.appendChild(p);
    console.log(titleCell);
}

function getDataFromTable() {
	const title = document.querySelectorAll('.searchField')[0].value;
	const rate = document.querySelectorAll('.searchField')[1].value;
	const description = document.querySelectorAll('.searchField')[2].value;
	const test = 'test';
	const array = [title, rate, description, test];
	createNextRow(array);
}

addGameButton.addEventListener('click', getDataFromTable);
