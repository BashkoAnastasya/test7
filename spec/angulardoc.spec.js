var MainPage = require('../pages/angulardoc.page.js');

describe('Тестирование стараницы https://angular.io/docs',  function () {
    var mainPage = new MainPage();
    beforeEach(async function () {
        // открываем тестируемую страницу
        browser.driver.get('https://angular.io/docs');
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
    });

    it('Проверка количества элементов левой панели', async function () {
        expect(mainPage.menuItemsLeftCount()).toEqual(5);
    });

    it('Находим верхнюю панель и проверяем количество элементов', async function () {
        expect(mainPage.menuItemsCount()).toEqual(5);
    });

    it('Проверка количества элементов центральной панели', async function () {
        expect(mainPage.menuItemsCentreCount()).toEqual(3);
    });

    it('Проверка открытия главной страницы', async function () {
        await mainPage.buttonHome.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/');
    });

    it('Нажимаем на 1-ый элемент "Features"', async function () {
        await mainPage.menuUpButtons.get(0).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/features');
    });
    xit('Нажимаем на 2-ый элемент "DOCS"', async function () {
        await mainPage.menuUpButtons.get(1).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/docs');
    });
    it('Нажимаем на 3-ый элемент "resources"', async function () {
        await mainPage.menuUpButtons.get(2).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/resources');
        await browser.navigate().back();
    });
    xit('Нажимаем на 4-ый элемент "events"', async function () {
        await mainPage.menuUpButtons.get(3).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/events');
    });
    xit('Нажимаем на 5-ый элемент "blog"', async function () {
        //  browser.ignoreSynchronization=false;
        await mainPage.menuUpButtons.get(4).click();
        browser.ignoreSynchronization = true;
        expect(browser.getCurrentUrl()).toEqual('https://blog.angular.io/');
        browser.ignoreSynchronization = false;
    });

    it('Тестирование  изменение цвета элементов центрального блока:1 элемент', async function () {
        var colorcentrelemangul = await mainPage.menuCenterButtons.get(0).getCssValue('color');
        await browser.actions().mouseMove(mainPage.menuCenterButtons.get(0)).perform();
        var colorcentrelemangulnew = await mainPage.menuCenterButtons.get(0).getCssValue('color');
        expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
    });
    it('Тестирование  изменение цвета элементов центрального блока: 2 элемент', async function () {
        var colorcentrelemangul = await mainPage.menuCenterButtons.get(1).getCssValue('color');
        await browser.actions().mouseMove(mainPage.menuCenterButtons.get(1)).perform();
        var colorcentrelemangulnew = await mainPage.menuCenterButtons.get(1).getCssValue('color');
        expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
    });
    it('Тестирование  изменение цвета элементов центрального блока: 3 элемент', async function () {
        var colorcentrelemangul = await mainPage.menuCenterButtons.get(2).getCssValue('color');
        await browser.actions().mouseMove(mainPage.menuCenterButtons.get(2)).perform();
        var colorcentrelemangulnew = await mainPage.menuCenterButtons.get(2).getCssValue('color');
        await expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
    });

    it('Проверка видимости меню при открытии страницы', async function () {
        expect(await mainPage.menuLeftPanel.isDisplayed()).toBe(true);
    });

    xit('Проверка скрытия меню при нажатии', async function () {
        await mainPage.buttonMenuOpen.click();
        expect(await mainPage.menuLeftPanel.isDisplayed()).toBe(false);
    });

    it('Проверка левой панели:  1-ый элемент', async function () {
        await mainPage.menuButtonsLeftLevel1.get(0).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
    });

    it('Проверка левой панели:  2-ый элемент', async function () {
        await mainPage.menuButtonsLeftLevel1.get(1).click();
        expect(mainPage.menuButtonsLeftLevel1.get(1).getAttribute('aria-pressed')).toEqual('true');
    });

    it('Проверка левой панели:  3-ый элемент', async function () {
        await mainPage.menuButtonsLeftLevel1.get(2).click();
        expect(mainPage.menuButtonsLeftLevel1.get(2).getAttribute('aria-pressed')).toEqual('true');
    });

    xit('Проверка левой панели:  4-ый элемент', async function () {
        await  mainPage.menuButtonsLeftLevel1.get(3).click();
        expect(mainPage.menuButtonsLeftLevel1.get(3).getAttribute('aria-pressed')).toEqual('true');
    });

    it('Проверка левой панели:  5-ый элемент', async function () {
        await mainPage.menuButtonsLeftLevel1.get(4).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/api');

    });

    it('Тестирование отображения результата поиска', async function () {
        await expect(mainPage.resultsearch.isPresent()).toBe(false);
        await mainPage.inputSearch.sendKeys('s');
        await browser.sleep(2000);
        expect(mainPage.resultsearch.isPresent()).toBe(true);
    });

    it('Тестирование поиска на пустой результат', async function () {
        await mainPage.inputSearch.sendKeys('sdsfsdfsdf');
        await browser.sleep(2000);
        expect(mainPage.resultsearch.getText()).toEqual('No results found.');
    });

    it('Тестирование  изсменения поля ввода поиска при вводе строки ', async function () {
        var sizesearch = await mainPage.inputSearch.getSize();
        await mainPage.inputSearch.sendKeys('s');
        var sizesearchnew = await mainPage.inputSearch.getSize();
        expect(sizesearch).not.toBe(sizesearchnew);
    });

    it('Смена языка', async function () {
        await mainPage.linkChineseLang.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.cn/');
    });

});