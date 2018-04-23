var MainPage = require('../pages/angulardoc.page.js');

describe('Тестирование стараницы https://angular.io/', function() {
    var mainPage = new MainPage();
    beforeAll(function() {
        // открываем тестируемую страницу
        browser.driver.get('https://angular.io/docs');
        browser.driver.manage().window().maximize();
    });
        it('Количество элементов левой панели', function() {
            expect(mainPage.menuItemsLeftCount()).toEqual(5);
        });
        it('Количества элементов верхней панели', function() {
            expect(mainPage.menuItemsCount()).toEqual(5);
        });
        it('количества элементов центральной панели', function() {
            expect(mainPage.menuItemsCentreCount()).toEqual(3);
        });
        it('Открытия главной страницы', function() {
            mainPage.buttonHome.click();
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/');
            browser.navigate().back();
        });
        it('Проверка сылок верхней панели 1-ый элемент "Features"', function() {
            mainPage.clickOnMenuItemByIndex2(0);
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/features');
            browser.navigate().back();
        });
        it('Проверка сылок верхней панели 2-ый элемент "DOCS"', function() {
            mainPage.clickOnMenuItemByIndex2(1);
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/docs');
            browser.navigate().back();
        });
        it('Проверка сылок верхней панели 3-ый элемент "resources"', function() {
            mainPage.clickOnMenuItemByIndex2(2);
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/resources');
            browser.navigate().back();
        });
        it('Проверка сылок верхней панели 4-ый элемент "events"', function() {
            mainPage.clickOnMenuItemByIndex2(3);
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/events');
            browser.navigate().back();
        });
        it('Проверка сылок верхней панели 5-ый элемент "blog"', function() {
            //  browser.ignoreSynchronization=false;
            mainPage.clickOnMenuItemByIndex2(4);
            browser.ignoreSynchronization=true;
            expect(browser.getCurrentUrl()).toEqual('https://blog.angular.io/');
            browser.navigate().back();
            browser.ignoreSynchronization=false;
        });
        it('Тестирование  изменение цвета элементов центрального блока 1 элем', function() {
            var  colorcentrelemangul=mainPage.getIndexMenuCenterButtons(0).getCssValue('color');
            browser.actions().mouseMove(mainPage.getIndexMenuCenterButtons(0)).perform();
            var  colorcentrelemangulnew=mainPage.getIndexMenuCenterButtons(0).getCssValue('color');
            expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
        });
        it('Тестирование  изменение цвета элементов центрального блока 2 элем', function() {
            var  colorcentrelemangul=mainPage.getIndexMenuCenterButtons(1).getCssValue('color');
            browser.actions().mouseMove(mainPage.getIndexMenuCenterButtons(1)).perform();
            var  colorcentrelemangulnew=mainPage.getIndexMenuCenterButtons(1).getCssValue('color');
            expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
        });
        it('Тестирование  изменение цвета элементов центрального блока 3 элем', function() {
            var  colorCentrElement=mainPage.getIndexMenuCenterButtons(2).getCssValue('color');
            browser.actions().mouseMove(mainPage.getIndexMenuCenterButtons(2)).perform();
            var  colorCentrElementnew=mainPage.getIndexMenuCenterButtons(2).getCssValue('color');
            expect(colorCentrElement).not.toBe(colorCentrElementnew);
        });
        it('видимость меню при открытии страницы', function() {
            expect( mainPage.isDisplayedmenuLeftPanel()).toBe(true);
        });
        it('Проверка скрытия меню при клике', function() {
            mainPage.buttonMenuOpen.click();
            expect(mainPage.isDisplayedmenuLeftPanel()).toBe(false);
            mainPage.buttonMenuOpen.click();
        });
        it('Проверка левой панели 1-ый элемент', function() {
            mainPage.clickOnMenuItemButtonsLeftLevel1(0);
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
            browser.navigate().back();
        });
        it('Проверка левой панели 2-ый элемент', function() {
            mainPage.clickOnMenuItemButtonsLeftLevel1(1);
            expect(mainPage.getAttributemenuButtonsLeftgetAtribute(1)).toEqual('true');
            mainPage.clickOnMenuItemButtonsLeftLevel1(1);
        });
        it('Проверка левой панели 3-ый элемент', function() {
            mainPage.clickOnMenuItemButtonsLeftLevel1(2);
            expect(mainPage.getAttributemenuButtonsLeftgetAtribute(2)).toEqual('true');
            mainPage.clickOnMenuItemButtonsLeftLevel1(2);
        });
        it('Проверка левой панели 4-ый элемент', function() {
            mainPage.clickOnMenuItemButtonsLeftLevel1(3);
            expect(mainPage.getAttributemenuButtonsLeftgetAtribute(3)).toEqual('true');
            mainPage.clickOnMenuItemButtonsLeftLevel1(3);
        });
        it('Проверка левой панели 5-ый элемент', function() {
            mainPage.clickOnMenuItemButtonsLeftLevel1(4);
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/api');
            browser.navigate().back();
        });
        it('Тестирование отображения результата поиска', function() {
            expect(mainPage.resultsearch.isPresent()).toBe(false);
            mainPage.stringsearch('s');
            browser.sleep(500);
            expect(mainPage.resultsearch.isPresent()).toBe(true);
        });

        it('Тестирование поиска на пустой результат', function() {
            mainPage.stringsearch('sdsfsdfsdf');
            browser.sleep(500);
            expect(mainPage.resultsearch.getText()).toEqual('No results found.');
            mainPage.inputSearch.clear();
        });

        it('Изменение размера поля ввода поиска при вводе строки', function() {
            var sizesearch=mainPage.inputSearch.getSize();
            mainPage.stringsearch('s');
            var sizesearchnew=mainPage.inputSearch.getSize();
            expect(sizesearch).not.toBe(sizesearchnew);
            mainPage.inputSearch.clear();
        });
});