const myContainer = document.querySelector('.results');

const url = 'https://api.rawg.io/api/games';

async function getGames() {
	
	
	try {
		const response = await fetch(url);
		
		const data = await response.json();
		
		console.log(data);
		
		const games = data.results;
		
		console.log(games);
		
		myContainer.innerHTML = '';

		for (let i = 0; i < games.length; i++) {
			console.log(games[i].length);
			
			if (i === 8) {
				break;
			}
			myContainer.innerHTML += `<div class="result"> <h2>Game ${i + 1} : ${games[i].name}</h2>
			<h4>Rating : ${games[i].rating}<h4><h5>Number of Tags : ${games[i].tags.length}</h5></div>`;
		}
	} catch (error) {
		console.log('An error occurred');
		myContainer.innerHTML = displayError('Warning!!! Code error occurred when calling the API');
	}finally {
		console.log('finally');
	}
}

getGames();
