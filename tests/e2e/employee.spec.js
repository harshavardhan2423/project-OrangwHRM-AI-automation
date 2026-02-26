import { test, expect } from '../../src/fixtures/baseFixture.js'
import { employeePIM } from '../../src/pages/EmployeePage'
import { employee } from '../../src/data/testData';


test.describe("employee details",()=>{
    test("adding employee",async({loginPage,page})=>{
        const Employee = new employeePIM(page);
        await Employee.navigatePIM();
        await Employee.addemployee(employee.firstName,employee.lastName);
        const message = await Employee.getsucessmessage()
        expect(message).toContain('Successfully Saved')



    })
})