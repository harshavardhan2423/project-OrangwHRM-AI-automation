import{test,expect} from '@playwright/test'
import { Loginpage } from '../../src/pages/LoginPage';
import { employeePIM } from '../../src/pages/EmployeePage'
import { employee } from '../../src/data/testData';
import { users } from '../../src/data/testData';

test.describe("employee details",()=>{
    test("adding employee",async({page})=>{
        const loginPage = new Loginpage(page);
        await loginPage.navigate();
        await loginPage.login(users.admin.username,users.admin.password);


        
        const Employee = new employeePIM(page);
        await Employee.navigatePIM();
        await Employee.addemployee(employee.firstName,employee.lastName);
        const message = await Employee.getsucessmessage()
        expect(message).toContain('Successfully Saved')



    })
})