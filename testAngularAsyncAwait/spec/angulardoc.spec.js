var MainPage = require('../pages/angulardoc.page.js');
var mainPage = new MainPage();

describe('Проверка количества элементов', function () {
    beforeAll(async function () {
        // открываем тестируемую страницу
        await  browser.get('https://angular.io/docs');
        await browser.manage().window().maximize();
    });
    it('Количество элементов левой панели', async function () {
        expect(await mainPage.menuItemsLeftCount()).toEqual(5);
    });
    it('Количество элементов верхней панели', async function () {
        expect(await mainPage.menuItemsCount()).toEqual(5);
    });
    it('Количество элементов центральной панели', async function () {
        expect(await mainPage.menuItemsCentreCount()).toEqual(3);
    });
});
describe('Тетсирование элементов страницы', function () {
    beforeAll(async function () {
        // открываем тестируемую страницу
        await  browser.get('https://angular.io/docs');
        await browser.manage().window().maximize();
    });
    it('Открытие главной страницы', async function () {
        await mainPage.buttonHome.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/');
        browser.navigate().back();
    });
    it('Проверка ссылок верхней панели 1-ый элемент "Features"', async function () {
        await mainPage.clickOnMenuItemByIndex2(0);
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/features');
        browser.navigate().back();
    });
    it('Проверка ссылок верхней панели 2-ый элемент "DOCS"', async function () {
        await mainPage.clickOnMenuItemByIndex2(1);
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/docs');
        browser.navigate().back();
    });
    it('Проверка ссылок верхней панели 3-ый элемент "resources"', async function () {
        await mainPage.clickOnMenuItemByIndex2(2);
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/resources');
        browser.navigate().back();
    });
    it('Проверка сылок верхней панели 4-ый элемент "events"', async function () {
        await mainPage.clickOnMenuItemByIndex2(3);
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/events');
        browser.navigate().back();
    });
    it('Проверка ссылок верхней панели 5-ый элемент "blog"', async function () {
        //  browser.ignoreSynchronization=false;
        await mainPage.clickOnMenuItemByIndex2(4);
        browser.ignoreSynchronization = true;
        expect(browser.getCurrentUrl()).toEqual('https://blog.angular.io/');
        await browser.navigate().back();
        browser.ignoreSynchronization = false;
    });
    it('Тестирование изменение цвета элементов центрального блока 1 элем', async function () {
        let colorCentrElement = await mainPage.getIndexMenuCenterButtons(0).getCssValue('color');
        await browser.actions().mouseMove(mainPage.getIndexMenuCenterButtons(0)).perform();
        let colorCentrElementnew = await mainPage.getIndexMenuCenterButtons(0).getCssValue('color');
        expect(colorCentrElement).not.toBe(colorCentrElementnew);
    });
    it('Тестирование  изменение цвета элементов центрального блока 2 элем', async function () {
        let colorCentrElement = mainPage.getIndexMenuCenterButtons(1).getCssValue('color');
        await browser.actions().mouseMove(mainPage.getIndexMenuCenterButtons(1)).perform();
        let colorCentrElementnew = mainPage.getIndexMenuCenterButtons(1).getCssValue('color');
        expect(colorCentrElement).not.toBe(colorCentrElementnew);
    });
    it('Тестирование  изменение цвета элементов центрального блока 3 элем', async function () {
        let colorCentrElement = mainPage.getIndexMenuCenterButtons(2).getCssValue('color');
        await browser.actions().mouseMove(mainPage.getIndexMenuCenterButtons(2)).perform();
        let colorCentrElementnew = mainPage.getIndexMenuCenterButtons(2).getCssValue('color');
        expect(colorCentrElement).not.toBe(colorCentrElementnew);
    });
    it('видимость меню при открытии страницы', async function () {
        expect(mainPage.isDisplayedmenuLeftPanel()).toBe(true);
    });
    it('Проверка скрытия меню при клике', async function () {
        await mainPage.buttonMenuOpen.click();
        expect(mainPage.isDisplayedmenuLeftPanel()).toBe(false);
        await mainPage.buttonMenuOpen.click();
    });
    it('Проверка левой панели 1-ый элемент', async function () {
        await mainPage.clickOnMenuItemButtonsLeftLevel1(0);
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
        browser.navigate().back();
    });
    it('Проверка левой панели 2-ый элемент', async function () {
        await mainPage.clickOnMenuItemButtonsLeftLevel1(1);
        expect(await mainPage.getAttributemenuButtonsLeftgetAtribute(1)).toEqual('true');
        await mainPage.clickOnMenuItemButtonsLeftLevel1(1);
    });
    it('Проверка левой панели 3-ый элемент', async function () {
        await mainPage.clickOnMenuItemButtonsLeftLevel1(2);
        expect(await mainPage.getAttributemenuButtonsLeftgetAtribute(2)).toEqual('true');
        await  mainPage.clickOnMenuItemButtonsLeftLevel1(2);
    });
    it('Проверка левой панели 4-ый элемент', async function () {
        await mainPage.clickOnMenuItemButtonsLeftLevel1(3);
        expect(await mainPage.getAttributemenuButtonsLeftgetAtribute(3)).toEqual('true');
        await mainPage.clickOnMenuItemButtonsLeftLevel1(3);
    });
    it('Проверка левой панели 5-ый элемент', async function () {
        await mainPage.clickOnMenuItemButtonsLeftLevel1(4);
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/api');
        browser.navigate().back();
    });
    it('Тестирование отображения результата поиска', async function () {
        expect(await mainPage.resultsearch.isPresent()).toBe(false);
        await mainPage.stringsearch('s');
        await browser.waitForAngular();
        expect(await mainPage.resultsearch.isPresent()).toBe(true);
    });
    it('Тестирование поиска на пустой результат', async function () {
        await mainPage.stringsearch('sdsfsdfsdf');
        await browser.sleep(500);
        expect(await mainPage.resultsearch.getText()).toEqual('No results found.');
        await mainPage.inputSearch.clear();
    });
    it('Изменение размера поля ввода поиска при вводе строки', async function () {
        let sizesearch = await mainPage.inputSearch.getSize();
        await mainPage.stringsearch('s');
        let sizesearchnew = await mainPage.inputSearch.getSize();
        expect(sizesearch).not.toBe(sizesearchnew);
        await mainPage.inputSearch.clear();
    });
});

