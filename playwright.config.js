// playwright.config.js
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  // Tell Playwright where your tests are
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Retry failed tests (2 times in CI, 0 locally)
  retries: process.env.CI ? 2 : 0,

  // Number of parallel workers
  workers: process.env.CI ? 2 : 4,

  // Reporter — Allure + HTML + terminal list
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['allure-playwright', { outputFolder: 'reports/allure-results' }],
  ],

  // Global settings for ALL tests
  use: {
    // Base URL from .env file
    baseURL: process.env.BASE_URL,

    // Take screenshot only when test fails
    screenshot: 'only-on-failure',

    // Record video only when test fails
    video: 'retain-on-failure',

    // Save trace on first retry (great for debugging)
    trace: 'on-first-retry',

    // Browser window size
    viewport: { width: 1280, height: 720 },

    // Wait up to 30s for actions
    actionTimeout: 30000,

    // Wait up to 30s for navigation
    navigationTimeout: 30000,
  },

  // How long a single test can run
  timeout: 60000,

  // How long to wait for expect() assertions
  expect: {
    timeout: 10000,
  },

  // Browsers to test on
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // Output folder for test artifacts
  outputDir: 'reports/test-results',
});