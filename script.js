const nameEle = document.querySelectorAll('.name');
const birthdayP = document.querySelector('p.birthday');
const bioButton = document.querySelector('button#display_bio');
const bioP = document.querySelector('p.bio');

// Name
document.addEventListener('DOMContentLoaded', () => nameSet());

// Birthday
document.addEventListener('DOMContentLoaded', () => birthdaySet());

// Bio
document.addEventListener('DOMContentLoaded', () => bioSet());
bioButton.addEventListener('click', () => hiddenCheck());
function hiddenCheck() {
	let bioPClass = bioP.classList;

	if ([...bioPClass].some((cls) => cls === 'hidden')) {
		// console.log(bioPClass);
		bioPClass.remove('hidden');
	} else {
		// console.log(bioPClass);
		bioPClass.add('hidden');
	}

	console.log(bioPClass);
}

// Async Requests from einstein.json
//  Grabs the information
function infoGet(type) {
	return fetch('einstein.json')
		.then((res) => res.json())
		.then((data) => data[type]);
}

// Sets the inner text of p.name to the Name
async function nameSet() {
	// console.log(await infoGet('name'));
	for (nameTag of nameEle) {
		nameTag.innerText = await infoGet('name');
	}
}

// Sets the inner text of p.birthday to the birthday
async function birthdaySet() {
	// console.log(await infoGet('birthday'));
	birthdayP.innerText = await infoGet('birthday');
}

async function bioSet() {
	// console.log(await infoGet('bio'));
	bioP.innerText = await infoGet('bio');
}
