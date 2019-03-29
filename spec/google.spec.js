const URL = 'https://www.google.com';

describe('Google', () => {
    beforeAll(async () => {
        await page.goto(URL);
    });

    it('should display "google" text on page', async () => {
        await expect(page).toMatch('google');
    });
});
