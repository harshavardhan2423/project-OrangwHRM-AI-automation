import{test as base} from '@playwright/test'
import { Loginpage } from '../pages/LoginPage';
import { users } from '../data/testData';

export const test = base.extend({

    loginPage: async ({page},use)=>{
        const loginPage = new Loginpage(page);
        await loginPage.navigate();
        await loginPage.login(users.admin.username,users.admin.password);
        await use(loginPage);
    }
})

export{expect} from '@playwright/test'