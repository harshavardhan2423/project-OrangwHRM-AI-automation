import{test,expect} from '@playwright/test'
import { Loginpage } from '../../src/pages/LoginPage'
import { users, messages } from '../../src/data/testData.js'

test.describe('login tests',()=>{
    test('should login with credentials @smoke',async({page})=>{
        const loginPage = new Loginpage(page);
        await loginPage.navigate();
        await loginPage.login(users.admin.username,users.admin.password);
    })
})