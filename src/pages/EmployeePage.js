

class employeePIM{
    constructor(page){
        this.page= page;
        this.addemployeebutton= page.getByText("Add Employee")
        this.firstnameinput = page.getByPlaceholder("first Name");
        this.lastnameinput = page.getByPlaceholder("Last Name");
        this.savebutton = page.getByRole("button",{name:'Save'})
    }

    async navigatePIM(){
    await this.page.goto("/web/index.php/pim/viewPimModule")
    }
    
    async addemployee(firstName,lastName){
        await this.addemployeebutton.click();
        await this.firstnameinput.fill(firstName);
        await this.lastnameinput.fill(lastName);
        await this.savebutton.click();
    }

    async getsucessmessage(){
       return await this.page.getByText("Successfully Saved").textContent();
    }



}

export{employeePIM};
