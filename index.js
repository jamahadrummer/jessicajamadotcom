console.log('Start Script');

const headerLeft = document.getElementsByClassName('headerLeft');
const prodBtn = document.getElementsByClassName('prodBtn');
const mediaBtn = document.getElementsByClassName('mediaBtn');

const pageTurn = (pageName) => {
	location.href = pageName;
};

const extLink = (pageURL) => {
	window.open(pageURL, '_blank');
};

headerLeft.headerLeftBtn.addEventListener('click', () => {
	pageTurn('index.html');
});

prodBtn.pCatBtn1.addEventListener('click', () => {
	pageTurn('products.html#numberblocksTitle');
});

prodBtn.pCatBtn2.addEventListener('click', () => {
	pageTurn('products.html#socialEmotionalTitle');
});

prodBtn.pCatBtn3.addEventListener('click', () => {
	pageTurn('products.html#literacyTitle');
});

prodBtn.pCatBtn4.addEventListener('click', () => {
	pageTurn('products.html#mathTitle');
});

mediaBtn1.addEventListener('click', () => {
	extLink('https://www.thegeniusofplay.org/genius/expert-advice/articles/social-emotional-learning-during-the-holidays.aspx?WebsiteKey=f24671dc-3a61-4dfa-854c-b2d74801f627');
});

mediaBtn2.addEventListener('click', () => {
	extLink('https://kidscreen.com/2023/09/29/why-self-care-and-sel-toys-are-on-the-rise/');
});

mediaBtn3.addEventListener('click', () => {
	extLink('https://www.wbez.org/reset-with-sasha-ann-simons/2022/12/13/the-benefits-of-social-and-emotional-learning-toys');
});

sMediaBtn1.addEventListener('click', () => {
	extLink('https://www.linkedin.com/in/jessica-jama-28212898');
});


console.log('End Script');
