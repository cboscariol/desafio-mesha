


export async function getWeather(value) {
  const APIKEY = "0055bdf18041d09c41f9defd04c36338"
	try {
		const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIKEY}`);

		const data = await resposta.json();
   
		if (resposta.status >= 400) {
			return { error: data }
		}

		return data

	} catch (error) {
		return { error: error.message }
	}
}
