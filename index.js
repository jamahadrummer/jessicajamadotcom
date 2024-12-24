console.log('Start Script');
const headerLeftBtn = document.getElementById('headerLeftBtn');
const iconBtn1 = document.getElementById('iconBtn1');
const iconBtn2 = document.getElementById('iconBtn2');
const iconBtn3 = document.getElementById('iconBtn3');
const iconBtn4 = document.getElementById('iconBtn4');

const pageTurn = (pageName) => {
	location.href = pageName;
};

const extLink = (pageURL) => {
	window.open(pageURL, '_blank');
};

headerLeftBtn.addEventListener('click', () => {
	pageTurn('index.html');
});

iconBtn1.addEventListener('click', () => {
	extLink('https://www.linkedin.com/in/jessica-jama-28212898/');
});

mediaBtn2.addEventListener('click', () => {
	extLink('https://www.thegeniusofplay.org/genius/expert-advice/articles/social-emotional-learning-during-the-holidays.aspx?WebsiteKey=f24671dc-3a61-4dfa-854c-b2d74801f627');
});

mediaBtn3.addEventListener('click', () => {
	extLink('https://kidscreen.com/2023/09/29/why-self-care-and-sel-toys-are-on-the-rise/');
});

console.log('End Script');
