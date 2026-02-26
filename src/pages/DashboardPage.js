class Dashboard {
    constructor(page){
        this.page = page ;
        this.title = page.getByRole('heading',{name:'Dashboard'})

    }

    async isLoaded(){
      return await this.title.isVisible()

    }
}

export{Dashboard};