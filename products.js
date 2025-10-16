console.log('Start Script');

var numberblocks = require("./data/numberblocks.json")
var socialEmotional = require("./data/socialEmotional.json")
var literacy = require("./data/literacy.json")
var math = require("./data/math.json")


const headerLeftBtn = document.getElementById('headerLeftBtn');

const pageTurn = (pageName) => {
	location.href = pageName;
};

const extLink = (pageURL) => {
	window.open(pageURL, '_blank');
};

const numberblocksWrapper = document.getElementById('numberblocks');
// const socialEmotionalWrapper = document.getElementById('socialEmotional');
// const literacyWrapper = document.getElementById('literacy');
// const mathWrapper = document.getElementById('math');

numberblocksWrapper.addEventListener('click', (event) => {
	const isButton = event.target.nodeName === 'BUTTON';
	if (!isButton) {
		return;
	}

	console.dir(event.target.id);
})

// socialEmotionalWrapper.addEventListener('click', (event) => {
// 	const isButton = event.target.nodeName === 'BUTTON';
// 	if (!isButton) {
// 		return;
// 	}

// 	console.dir(event.target.id);
// })

// literacyWrapper.addEventListener('click', (event) => {
// 	const isButton = event.target.nodeName === 'BUTTON';
// 	if (!isButton) {
// 		return;
// 	}

// 	console.dir(event.target.id);
// })

// mathWrapper.addEventListener('click', (event) => {
// 	const isButton = event.target.nodeName === 'BUTTON';
// 	if (!isButton) {
// 		return;
// 	}

// 	console.dir(event.target.id);
// })


headerLeftBtn.addEventListener('click', () => {
	pageTurn('index.html');
});

pBtn1.addEventListener('click', () => {
	extLink(numberblocks.pBtn1.hyperlink);
});
pBtn2.addEventListener('click', () => {
	extLink(numberblocks.pBtn2.hyperlink);
});
pBtn3.addEventListener('click', () => {
	extLink(numberblocks.pBtn3.hyperlink);
});
pBtn4.addEventListener('click', () => {
	extLink(numberblocks.pBtn4.hyperlink);
});
pBtn5.addEventListener('click', () => {
	extLink(numberblocks.pBtn5.hyperlink);
});
pBtn6.addEventListener('click', () => {
	extLink(numberblocks.pBtn6.hyperlink);
});
pBtn7.addEventListener('click', () => {
	extLink(numberblocks.pBtn7.hyperlink);
});
pBtn8.addEventListener('click', () => {
	extLink(numberblocks.pBtn8.hyperlink);
});
pBtn9.addEventListener('click', () => {
	extLink(numberblocks.pBtn9.hyperlink);
})
pBtn10.addEventListener('click', () => {
	extLink(numberblocks.pBtn10.hyperlink);
});
pBtn11.addEventListener('click', () => {
	extLink(numberblocks.pBtn11.hyperlink);
});
pBtn12.addEventListener('click', () => {
	extLink(numberblocks.pBtn12.hyperlink);
});
pBtn13.addEventListener('click', () => {
	extLink(numberblocks.pBtn13.hyperlink);
});
pBtn14.addEventListener('click', () => {
	extLink(numberblocks.pBtn14.hyperlink);
});
pBtn15.addEventListener('click', () => {
	extLink(numberblocks.pBtn15.hyperlink);
});
pBtn16.addEventListener('click', () => {
	extLink(numberblocks.pBtn16.hyperlink);
});
pBtn17.addEventListener('click', () => {
	extLink(numberblocks.pBtn17.hyperlink);
});
pBtn18.addEventListener('click', () => {
	extLink(numberblocks.pBtn18.hyperlink);
});
pBtn19.addEventListener('click', () => {
	extLink(numberblocks.pBtn19.hyperlink);
});
pBtn20.addEventListener('click', () => {
	extLink(numberblocks.pBtn20.hyperlink);
});
pBtn21.addEventListener('click', () => {
	extLink(numberblocks.pBtn21.hyperlink);
});
pBtn22.addEventListener('click', () => {
	extLink(numberblocks.pBtn22.hyperlink);
});
pBtn23.addEventListener('click', () => {
	extLink(numberblocks.pBtn23.hyperlink);
});
pBtn24.addEventListener('click', () => {
	extLink(socialEmotional.pBtn24.hyperlink);
});
pBtn25.addEventListener('click', () => {
	extLink(socialEmotional.pBtn25.hyperlink);
});
pBtn26.addEventListener('click', () => {
	extLink(socialEmotional.pBtn26.hyperlink);
});
pBtn27.addEventListener('click', () => {
	extLink(socialEmotional.pBtn27.hyperlink);
});
pBtn28.addEventListener('click', () => {
	extLink(socialEmotional.pBtn28.hyperlink);
});
pBtn29.addEventListener('click', () => {
	extLink(socialEmotional.pBtn29.hyperlink);
});
pBtn30.addEventListener('click', () => {
	extLink(socialEmotional.pBtn30.hyperlink);
});
pBtn31.addEventListener('click', () => {
	extLink(socialEmotional.pBtn31.hyperlink);
});
pBtn32.addEventListener('click', () => {
	extLink(socialEmotional.pBtn32.hyperlink);
});
pBtn33.addEventListener('click', () => {
	extLink(socialEmotional.pBtn33.hyperlink);
});
pBtn34.addEventListener('click', () => {
	extLink(socialEmotional.pBtn34.hyperlink);
});
pBtn35.addEventListener('click', () => {
	extLink(socialEmotional.pBtn35.hyperlink);
});
pBtn36.addEventListener('click', () => {
	extLink(socialEmotional.pBtn36.hyperlink);
});
pBtn37.addEventListener('click', () => {
	extLink(socialEmotional.pBtn37.hyperlink);
});
pBtn38.addEventListener('click', () => {
	extLink(socialEmotional.pBtn38.hyperlink);
});
pBtn39.addEventListener('click', () => {
	extLink(literacy.pBtn39.hyperlink);
})
pBtn40.addEventListener('click', () => {
	extLink(literacy.pBtn40.hyperlink);
});
pBtn41.addEventListener('click', () => {
	extLink(literacy.pBtn41.hyperlink);
});
pBtn42.addEventListener('click', () => {
	extLink(literacy.pBtn42.hyperlink);
});
pBtn43.addEventListener('click', () => {
	extLink(literacy.pBtn43.hyperlink);
});
pBtn44.addEventListener('click', () => {
	extLink(literacy.pBtn44.hyperlink);
});
pBtn45.addEventListener('click', () => {
	extLink(literacy.pBtn45.hyperlink);
});
pBtn46.addEventListener('click', () => {
	extLink(literacy.pBtn46.hyperlink);
});
pBtn47.addEventListener('click', () => {
	extLink(literacy.pBtn47.hyperlink);
});
pBtn48.addEventListener('click', () => {
	extLink(literacy.pBtn48.hyperlink);
});
pBtn49.addEventListener('click', () => {
	extLink(literacy.pBtn49.hyperlink);
})
pBtn50.addEventListener('click', () => {
	extLink(literacy.pBtn50.hyperlink);
});
pBtn51.addEventListener('click', () => {
	extLink(literacy.pBtn51.hyperlink);
});
pBtn52.addEventListener('click', () => {
	extLink(math.pBtn52.hyperlink);
});
pBtn53.addEventListener('click', () => {
	extLink(math.pBtn53.hyperlink);
});
pBtn54.addEventListener('click', () => {
	extLink(math.pBtn54.hyperlink);
});
pBtn55.addEventListener('click', () => {
	extLink(math.pBtn55.hyperlink);
});
pBtn56.addEventListener('click', () => {
	extLink(math.pBtn56.hyperlink);
});

console.log('End Script');
