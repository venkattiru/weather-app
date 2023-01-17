export default function getWeatherData(location, position) {
  let url = '';
  if (position) {
    url = `https://openweathermap.org/data/2.5/weather?lat=${location}&lon=${position}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`;
  } else {
    url = `https://openweathermap.org/data/2.5/weather?q=${location}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`;
  }
  const data = fetch(url)
    .then(res => res.json())
    .catch(error => console.log('error in service', error));
  return data;
}
