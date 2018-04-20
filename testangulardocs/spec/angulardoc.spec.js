var MainPage = require('../pages/angulardoc.page.js');

describe('Тестирование стараницы https://angular.io/', function() {
    var mainPage = new MainPage();
    beforeAll(function() {
        // открываем тестируемую страницу
        browser.driver.get('https://angular.io/docs');
        browser.driver.manage().window().maximize();
    });
    describe('Проверка количества элементов левой панели', function() {
        it('Находим левую панель и проверяем количество родительских элементов', function() {
            expect(mainPage.menuItemsLeftCount()).toEqual(5);
        });
    });
    describe('Проверка количества элементов верхней панели', function() {
        it('Находим верхнюю панель и проверяем количество элементов', function() {
            expect(mainPage.menuItemsCount()).toEqual(5);
        });
    });
    describe('Проверка количества элементов центральной панели', function() {
        it('Находим верхнюю панель и проверяем количество элементов', function() {
            expect(mainPage.menuItemsCentreCount()).toEqual(3);
        });
    });
    describe('Проверка открытия главной страницы', function() {
        it('Нажимаем на картинку ангуляра', function() {
            mainPage.clickButtonHome();
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/');
            browser.navigate().back();
        });
    });
    describe('Проверка сылок верхней панели', function() {
        beforeEach(function () {
            browser.ignoreSynchronization=false;
        });
        it('Нажимаем на 1-ый элемент "Features"', function() {
            mainPage.clickOnMenuItemByIndex2(0);
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/features');
            browser.navigate().back();
        });
        it('Нажимаем на 2-ый элемент "DOCS"', function() {
            mainPage.clickOnMenuItemByIndex2(1);
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/docs');
            browser.navigate().back();
        });
        it('Нажимаем на 3-ый элемент "resources"', function() {
            mainPage.clickOnMenuItemByIndex2(2);
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/resources');
            browser.navigate().back();
        });
        it('Нажимаем на 4-ый элемент "events"', function() {
            mainPage.clickOnMenuItemByIndex2(3);
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/events');
            browser.navigate().back();
        });
        it('Нажимаем на 5-ый элемент "blog"', function() {
            //  browser.ignoreSynchronization=false;
            mainPage.clickOnMenuItemByIndex2(4);
            browser.ignoreSynchronization=true;
            expect(browser.getCurrentUrl()).toEqual('https://blog.angular.io/');
            browser.navigate().back();
            browser.ignoreSynchronization=false;
        });
    });
    describe('Тестирование  изменение цвета элементов центрального блока',function() {
      it('Наведем курсор на Angular in Action и проверим изменится ли цвет', function() {
            var  colorcentrelemangul=mainPage.getIndexMenuCenterButtons(0).getCssValue('color');
            browser.actions().mouseMove(mainPage.getIndexMenuCenterButtons(0)).perform();
            var  colorcentrelemangulnew=mainPage.getIndexMenuCenterButtons(0).getCssValue('color');
            expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
        });
        it('Наведем курсор на Angular in Action и проверим изменится ли цвет', function() {
            var  colorcentrelemangul=mainPage.getIndexMenuCenterButtons(1).getCssValue('color');
            browser.actions().mouseMove(mainPage.getIndexMenuCenterButtons(1)).perform();
            var  colorcentrelemangulnew=mainPage.getIndexMenuCenterButtons(1).getCssValue('color');
            expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
        });
        it('Наведем курсор на Angular in Action и проверим изменится ли цвет', function() {
            var  colorcentrelemangul=mainPage.getIndexMenuCenterButtons(2).getCssValue('color');
            browser.actions().mouseMove(mainPage.getIndexMenuCenterButtons(2)).perform();
            var  colorcentrelemangulnew=mainPage.getIndexMenuCenterButtons(2).getCssValue('color');
            expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
        });
    });

    describe('Проверка видимости меню при открытии страницы', function() {
        it('Проверяем на видимость меню', function() {
            expect( mainPage.isDisplayedmenuLeftPanel()).toBe(true);
        });
    });
    describe('Проверка скрытия меню при нажатии', function() {
        it('Кликаем на кнопку меню и проверяем видимость меню', function() {
            mainPage.buttonMenuOpen.click();
            expect(mainPage.isDisplayedmenuLeftPanel()).toBe(false);
            mainPage.buttonMenuOpen.click();
        });
    });

    describe('Проверка левой панели', function() {
        it('Нажимаем на 1-ый элемент', function() {
            mainPage.clickOnMenuItemButtonsLeftLevel1(0);
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
            browser.navigate().back();
        });
        it('Нажимаем на 2-ый элемент', function() {
            mainPage.clickOnMenuItemButtonsLeftLevel1(1);
            expect(mainPage.getAttributemenuButtonsLeftgetAtribute(1)).toEqual('true');
            mainPage.clickOnMenuItemButtonsLeftLevel1(1);
        });
        it('Нажимаем на 3-ый элемент', function() {
            mainPage.clickOnMenuItemButtonsLeftLevel1(2);
            expect(mainPage.getAttributemenuButtonsLeftgetAtribute(2)).toEqual('true');
            mainPage.clickOnMenuItemButtonsLeftLevel1(2);
        });
        it('Нажимаем на 4-ый элемент', function() {
            mainPage.clickOnMenuItemButtonsLeftLevel1(3);
            expect(mainPage.getAttributemenuButtonsLeftgetAtribute(3)).toEqual('true');
            mainPage.clickOnMenuItemButtonsLeftLevel1(3);
        });
        it('Нажимаем на 5-ый элемент', function() {
            mainPage.clickOnMenuItemButtonsLeftLevel1(4);
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/api');
            browser.navigate().back();
        });
    });
    describe('Тестирование отображения результата поиска ', function() {
        it('вводим строку и проверяем появился ли элемент результата', function() {
            expect(mainPage.resultsearch.isPresent()).toBe(false);
            mainPage.stringsearch('s');
            browser.sleep(500);
            expect(mainPage.resultsearch.isPresent()).toBe(true);
        });
    });
    describe('Тестирование поиска на пустой результат', function() {
        it('вводим строку в поиск и проверяем текст', function() {
            mainPage.stringsearch('sdsfsdfsdf');
            browser.sleep(500);
            expect(mainPage.resultsearch.getText()).toEqual('No results found.');
            mainPage.stringsearch('');

        });
    });
    describe('Тестирование  изсменения поля ввода поиска при вводе строки ', function() {
        it('вводим строку и проверяем изменился ли размер поиска', function() {
            var sizesearch=mainPage.inputSearch.getSize();
            mainPage.stringsearch('s');
            var sizesearchnew=mainPage.inputSearch.getSize();
            expect(sizesearch).not.toBe(sizesearchnew);
            mainPage.stringsearch('');
        });
    });

});