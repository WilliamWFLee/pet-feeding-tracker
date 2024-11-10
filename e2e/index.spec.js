import { expect, test } from '@playwright/test'

test.describe('the index page', () => {
  test.describe('when I visit the index page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/')
    })

    test('I can see a heading with the name of the app', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Pet Feeding Tracker' }),
      ).toBeVisible()
    })

    test('I can see a tagline on the page', async ({ page }) => {
      await expect(page.getByRole('paragraph')).toHaveText(
        'Never forget to feed your pet again',
      )
    })
  })
})
