var MainPage = function () {
    const menuUpButtons = $$("aio-top-menu.ng-star-inserted ul li"); //верхняя панель кнопок
    const menuLeftPanel = $(".sidenav > aio-nav-menu:nth-child(1)");//левая панель
    const menuButtonsLeftLevel1 = $$(".vertical-menu-item.level-1"); //левая панель кнопок первого уровня
    const menuCenterButtons = $$(".card-container a"); // элементы центральной панели 3штуки
    const menuUpPanel = $("aio-top-menu.ng-star-inserted"); //верхняя панель
    const menueItemsList = $$(".dropdown-menu:nth-of-type(1)"); //все элементы левой панели
    const itemsOfExpandedMenue = $$(".dropdown.open li a");
    const menuCenterPanel = $(".card-container"); // центральная панель
    this.buttonMenuOpen = element(by.css('[title="Docs menu"]'));//кнопка скрытия открытия меню-левый верхний угол
    this.buttonHome = element(by.css('[title="Home"]'));//Home в верхней панели
    this.inputSearch = element(by.css('[aria-label="search"]'));//поле ввода поиска
    this.resultsearch = element(by.css('[class="search-results"]'));//панель результатов поиска

    //функция подсчета количесества элементов центарльной панели
    this.menuItemsCentreCount = async function () {
        return await menuCenterButtons.then(async function (items) {
            return await items.length;
        });
    };
    //количество элементов левой панели первого уровня
    this.menuItemsLeftCount = async function () {
        return await menuButtonsLeftLevel1.then(async function (items) {
            return await items.length;
        });
    };
    //количество элементов верхней панели
    this.menuItemsCount = async function () {
        return await menuUpButtons.then(async function (items) {
            return await items.length;
        });
    };
    this.clickOnMenuItemByIndex2 = async function (index) {
        return await  menuUpButtons.get(index).click();
    };
    //получение инфекса элемента центральной панели
    this.getIndexMenuCenterButtons = function (index) {
        return menuCenterButtons.get(index);
    };
    //отправка строки в поле поиска
    this.stringsearch = function (keys) {
        return this.inputSearch.sendKeys(keys);
    };
    // видимости левой панели
    this.isDisplayedmenuLeftPanel = function () {
        return menuLeftPanel.isDisplayed();
    }
    //функция получения атрибута для проверки раскрытия элемента первого уровня левой панели
    this.getAttributemenuButtonsLeftgetAtribute = async function (index) {
        return await  menuButtonsLeftLevel1.get(index).getAttribute('aria-pressed');
    };
    //клик по элементам первого уровня левой панели
    this.clickOnMenuItemButtonsLeftLevel1 = async function (index) {
        return await menuButtonsLeftLevel1.get(index).click();
    };

};
module.exports = MainPage;