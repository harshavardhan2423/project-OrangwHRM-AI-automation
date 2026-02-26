class Loginpage{
    constructor(page){
        this.page = page ;
        this.usernameinput = page.getByRole('textbox',{name:'username'});
        this.passwordinput = page.getByRole('textbox',{name:'password'});
        this.loginButton = page.getByRole('button',{name:'login'});
    }
    async navigate(){
       await this.page.goto(process.env.BASE_URL);

    }

    async login(username,password){
        await this.usernameinput.fill(username);
        await this.passwordinput.fill(password);
        await this.loginButton.click();

    }

}

export{Loginpage}