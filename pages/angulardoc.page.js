var MainPage = function () {
    this.menuUpButtons = $$("aio-top-menu.ng-star-inserted ul li"); //верхняя панель кнопок
    this.menuButtonsLeftLevel1 = $$(".vertical-menu-item.level-1"); //левая панель кнопок первого уровня
    this.menuCenterButtons = $$(".card-container a"); // элементы центральной панели 3штуки
    this.menuLeftPanel  = $(".sidenav > aio-nav-menu:nth-child(1)");//левая панель
    this.buttonHome = element(by.css('[title="Home"]'));//Home в верхней панели
    this.buttonMenuOpen = element(by.css('[title="Docs menu"]'));//кнопка скрытия открытия меню-левый верхний угол
    this.inputSearch = element(by.css('[aria-label="search"]'));//поле ввода поиска
    this.resultsearch =element(by.css('[class="search-results"]'));//панель результатов поиска
    this.linkChineseLang = element(by.css('[title="中文版"]'));

    //функция подсчета количества элементов центарльной панели
    this.menuItemsCentreCount = function(){
         return $$(".card-container a").then(function(items) {
            return items.length;
        });
    };

    //количество элементов левой панели первого уровня
    this.menuItemsLeftCount = function(){
       return $$(".vertical-menu-item.level-1").then(function(items) {
           return items.length;
       });
    };
    //количество элементов верхней панели
    this.menuItemsCount = function(){
        return $$("aio-top-menu.ng-star-inserted ul li").then(function(items) {
            return items.length;
        });
    };

};

module.exports = MainPage;