const registerForm = document.querySelector("#formRegister");

// const formname = document.querySelectorAll("input")
const fullname = document.getElementsByClassName("name");
const email = document.getElementsByClassName("email");
const phone = document.getElementsByClassName("phone");
const year = document.getElementsByClassName("year");
const techEvents = document.getElementsByClassName("techEvents");
const nontechevents = document.getElementsByClassName("nontechevents");
const games = document.getElementsByClassName("games");
const workshop = document.getElementsByClassName("workshop");

// const values = formname.map((res) => ({name: res.name, value: res.value}));

registerForm.addEventListener("click", async (e) => {
	console.log(
		fullname.value,
		email,
		phone,
		year,
		techEvents,
		nontechevents,
		games,
		workshop
	);
});

const register = (e) => {
	e.preventdefault();
	console.log(e.target);
	console.log("sdfg");
};
