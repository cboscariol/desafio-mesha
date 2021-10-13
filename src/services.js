


export async function getWeather(value) {
  const APIKEY = "0055bdf18041d09c41f9defd04c36338"
	try {
		const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIKEY}&units=metric`);

		const data = await resposta.json();
   
		if (resposta.status >= 400) {
			return { error: data }
		}

		return data

	} catch (error) {
		return { error: error.message }
	}
}

export async function getMusics(search) {
  
	try {
		const resposta = await fetch(`https://shazam.p.rapidapi.com/search?term=${search}&locale=pt-BR&offset=0&limit=5`, {
			"method": "GET",
			"headers": {
			"x-rapidapi-host": "shazam.p.rapidapi.com",
			"x-rapidapi-key": "ce3401389emshced2315e263b7cbp122501jsn4cc341de4c48"
		}
	})

		const data = await resposta.json();
   
		if (resposta.status >= 400) {
			return { error: data }
		}
		return data
	} catch (error) {
		return { error: error.message }
	}
}


