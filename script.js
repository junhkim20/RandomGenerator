const submitButton = document.querySelector("#submitButton");
const output = document.querySelector("#output");

submitButton.addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  generate(name);
  restyle();
});

function generate(name) {
	const phrases = [
		`${name}, a golden egg of opportunity falls into your lap this month.`,
		`All your hard work will soon pay off, ${name}`,
		`${name}, all the effort you are making will ultimately pay off`,
		`Do not underestimate yourself, ${name}. Human beings have unlimited potentials.`,
		`Somone will call you today, ${name}`,
		`${name}, success is near`,
		`A smart and loving person will be coming into your life, ${name}`
	];

	output.innerText = phrases[Math.floor(Math.random() * phrases.length)];
};

function restyle() {
	const colorValue1 = Math.floor(Math.random() * 256);
	const colorValue2 = Math.floor(Math.random() * 256);
	const colorValue3 = Math.floor(Math.random() * 256);

	output.style[`background-color`] = `rgb(${colorValue1}, ${colorValue2}, ${colorValue3})`;

	const colorValue4 = Math.floor(Math.random() * 256);
	const colorValue5 = Math.floor(Math.random() * 256);
	const colorValue6 = Math.floor(Math.random() * 256);
	output.style[`color`] = `rgb(${colorValue4}, ${colorValue5}, ${colorValue6})`;

	var fontType = [ "Times New Roman", "Verdana", "Helvetica", "Candara", "Book Antiqua"];
	var num = Math.floor(Math.random()*5);
	output.style[`font-family`] = fontType[num];
};