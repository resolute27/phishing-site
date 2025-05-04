let step = 1;
async function nextStep() {
	if (step === 1) {
		await runLoader();

		const emailInput = document.getElementById("email");
		let emailName = emailInput.value.trim();

		if (!emailName.includes("@")) {
			emailName += "@gmail.com";
		}

		const profile = document.querySelector(".user-info p");
		profile.textContent = emailName;

		document.querySelector(".user-info").style.display = "flex";
		document.querySelector(".left-section > p").style.display = "none";
		document.getElementById("step1").style.display = "none";
		document.getElementById("step2").style.display = "block";
		document.querySelector(".left-section h1").textContent = "歡迎";

		const passwordInput = document.getElementById("password");
		passwordInput.focus();

		step = 2;
	} else if (step === 2) {
		await runLoader();
		location.reload();
	}
}

function togglePassword() {
	const passwordInput = document.getElementById("password");
	if (document.getElementById("show-password").checked) {
		passwordInput.type = "text";
	} else {
		passwordInput.type = "password";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const emailInput = document.getElementById("email");
	emailInput.focus();

	emailInput.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			event.preventDefault();
			nextStep();
		}
	});

	const userInfo = document.querySelector(".user-info");
	userInfo.addEventListener("click", async function () {
		await runLoader();

		userInfo.style.display = "none";
		document.getElementById("step1").style.display = "block";
		document.getElementById("step2").style.display = "none";
		document.querySelector(".left-section h1").textContent = "登入";
		document.querySelector(".left-section > p").style.display = "block";

		const emailInput = document.getElementById("email");
		emailInput.focus();

		step = 1;
	});
});


function runLoader() {
  return new Promise((resolve) => {
    const card = document.querySelector(".card");
    const body = document.querySelector("body");

    card.classList.add("loader");
    body.classList.add("body-loader");

    const loader = document.querySelector(".loader");

    loader.addEventListener('animationend', function handler() {
      card.classList.remove("loader");
      body.classList.remove("body-loader");
      loader.removeEventListener('animationend', handler);
      resolve();
    });
  });
}