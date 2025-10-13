console.log('Start Script');

var numberBlockProducts = 23

const headerLeftBtn = document.getElementById('headerLeftBtn');
const prodBtn1 = document.getElementById('prodBtn1');
const prodBtn2 = document.getElementById('prodBtn2');
const prodBtn3 = document.getElementById('prodBtn3');
const pBtn1 = document.getElementById('pBtn1');

const pageTurn = (pageName) => {
	location.href = pageName;
};

const extLink = (pageURL) => {
	window.open(pageURL, '_blank');
};

var createVariables = () => {
	var ids = [];
	for (var i = 1; i <= numberBlockProducts; ++i) {
		document.getElementById('pBtn' + i)
	}

	return ids;
}



headerLeftBtn.addEventListener('click', () => {
	pageTurn('index.html');
});

// prodBtn1.addEventListener('click', () => {
// 	pageTurn('products.html#numberblocks');
// });

// prodBtn2.addEventListener('click', () => {
// 	pageTurn('products.html#socialemotional');
// });

// prodBtn3.addEventListener('click', () => {
// 	pageTurn('products.html');
// });

// prodBtn4.addEventListener('click', () => {
// 	pageTurn('products.html');
// });

// mediaBtn2.addEventListener('click', () => {
// 	extLink('https://www.thegeniusofplay.org/genius/expert-advice/articles/social-emotional-learning-during-the-holidays.aspx?WebsiteKey=f24671dc-3a61-4dfa-854c-b2d74801f627');
// });

// mediaBtn3.addEventListener('click', () => {
// 	extLink('https://kidscreen.com/2023/09/29/why-self-care-and-sel-toys-are-on-the-rise/');
// });

pBtn1.addEventListener('click', () => {
	extLink('https://www.hand2mind.com/item/numberblocks-blockzee-balance-activity-set');
});



// createVariables[0].addEventListener('click', () => {
// 	extLink('https://www.hand2mind.com/item/numberblocks-blockzee-balance-activity-set');
// })



console.log('End Script');
