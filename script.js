async function fetchWeather() {
  const apiKey = "5606ee3d518344888c075612241402";
  const city = "Murshidabad"; // Or any other city name
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Display temperature
    const temperature = data.current.temp_c.toFixed(1);
    document.getElementById(
      "temperature"
    ).innerText = `তাপমাত্রা: ${temperature}°C`;
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
}

window.addEventListener("load", () => {
  // Get current date
  const date = new Date();

  // Convert Gregorian date to Bangla date
  const banglaDate = gregorianToBangla(date);

  // Display Bangla date
  document.getElementById("banglaDate").innerText = banglaDate.date;
  document.getElementById("banglaDay").innerText = banglaDate.dayName;
  document.getElementById("banglaYear").innerText = banglaDate.year;

  // Get current temperature
  fetchWeather();
});

function gregorianToBangla(date) {
  const banglaDate = {};

  // Array of Bangla months
  const banglaMonths = [
    "বৈশাখ",
    "জ্যৈষ্ঠ",
    "আষাঢ়",
    "শ্রাবণ",
    "ভাদ্র",
    "আশ্বিন",
    "কার্তিক",
    "অগ্রহায়ণ",
    "পৌষ",
    "মাঘ",
    "ফাল্গুন",
    "চৈত্র",
  ];

  // Array of Bangla days
  const banglaDays = [
    "সোমবার",
    "মঙ্গলবার",
    "বুধবার",
    "বৃহস্পতিবার",
    "শুক্রবার",
    "শনিবার",
    "রবিবার",
  ];

  // Get Bangla year
  const banglaYear = date.getFullYear() - 593;

  // Get Bangla month
  const banglaMonth = banglaMonths[date.getMonth()];

  // Get Bangla day
  const banglaDay = banglaDays[date.getDay()];

  banglaDate.year = banglaYear;
  banglaDate.date = `${date.getDate()} ${banglaMonth}`;
  banglaDate.dayName = banglaDay;

  return banglaDate;
}
