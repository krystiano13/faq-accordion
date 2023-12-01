const listItems = document.querySelectorAll('li');
const hideAll = () => {
    listItems.forEach(item => {
        item.querySelector('p').style.display = 'none';
        item.querySelector('img').src = './assets/images/icon-plus.svg';
        item.querySelector('img').alt = "icon plus";
        item.style.height = "5rem";
    });
}

const expandElement = (listItem) => {
    hideAll();

    if(listItem.style.height === "5rem") {
        listItem.querySelector('p').style.display = 'block';
        listItem.querySelector('img').src = './assets/images/icon-minus.svg';
        listItem.querySelector('img').alt = "icon minus";
        listItem.style.height = "11rem";
    }
}

hideAll();

listItems.forEach(item => {
    item.addEventListener('click', () => expandElement(item));
})