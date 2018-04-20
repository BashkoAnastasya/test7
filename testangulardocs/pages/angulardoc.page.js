var MainPage = function () {
    var menuUpButtons = $$("aio-top-menu.ng-star-inserted ul li"); //верхняя панель кнопок
    var menuUpPanel = $("aio-top-menu.ng-star-inserted"); //верхняя панель
    var menuLeftPanel  = $(".sidenav > aio-nav-menu:nth-child(1)");//левая панель
    var menuButtonsLeftLevel1 = $$(".vertical-menu-item.level-1"); //левая панель кнопок первого уровня
    var menueItemsList = $$(".dropdown-menu:nth-of-type(1)"); //все элементы левой панели
    var itemsOfExpandedMenue = $$(".dropdown.open li a");
    var buttonHome = element(by.css('[title="Home"]'));//Home в верхней панели
    this.buttonMenuOpen = element(by.css('[title="Docs menu"]'));//кнопка скрытия открытия меню-левый верхний угол
    this.inputSearch = element(by.css('[aria-label="search"]'));//поле ввода поиска
    this.resultsearch =element(by.css('[class="search-results"]'));//панель результатов поиска
    var menuCenterPanel = $(".card-container"); // центральная панель
    var menuCenterButtons = $$(".card-container a"); // элементы центральной панели 3штуки

    //функция подсчета количесества элементов центарльной панели
    this.menuItemsCentreCount = function(){
        return menuCenterButtons.then(function(items) {
            return items.length;
        });
    };

    //количество элементов левой панели первого уровня
    this.menuItemsLeftCount = function(){
       return menuButtonsLeftLevel1.then(function(items) {
           return items.length;
       });
    };
    //количество элементов верхней панели
    this.menuItemsCount = function(){
        return menuUpButtons.then(function(items) {
            return items.length;
        });
    };

    //Функция клика домой
    this.clickButtonHome = function(index) {
        return buttonHome.click();
    };

    this.clickOnMenuItemByIndex2 = function(index) {
        return menuUpButtons.get(index).click();
    };

    //получение инфекса элемента центральной панели
    this.getIndexMenuCenterButtons= function(index) {
        return menuCenterButtons.get(index);
    };
    //отправка строки в поле поиска
    this.stringsearch =function (keys)    {
        return this.inputSearch.sendKeys(keys);
    };

    // видимости левой панели
    this.isDisplayedmenuLeftPanel = function () {
        return  menuLeftPanel.isDisplayed();
    }

     //функция получения атрибута для проверки раскрытия элемента первого уровня левой панели
    this.getAttributemenuButtonsLeftgetAtribute= function(index) {
        return menuButtonsLeftLevel1.get(index).getAttribute('aria-pressed');
    };
     //клик по элементам первого уровня левой панели
    this.clickOnMenuItemButtonsLeftLevel1 = function(index) {
        return menuButtonsLeftLevel1.get(index).click();
    };

};

module.exports = MainPage;