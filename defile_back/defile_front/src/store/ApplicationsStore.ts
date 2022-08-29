import { observable, runInAction, configure, makeObservable, action, computed } from "mobx"
import ApplicationService, { IPage, ISlide } from "../api/applications";
configure({ enforceActions: "observed" });

class ApplicationStore {

    slides:ISlide[] = []
    page?: IPage 
    applicationService?:ApplicationService = undefined;

    constructor() {
        this.applicationService = new ApplicationService();
        makeObservable(this, {
            slides: observable,
            page: observable
        })
    }

    async loadPage(slug?:string) {
        try {
            this.applicationService?.getPage(slug).then(result=> {
                runInAction(()=>{
                    this.page = result.data
                });
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    async getSlides()  {
        try {
        this.applicationService?.getCategories().then(result=>{
            runInAction(()=>{
                this.slides = result.data
            })
        });
        }
        catch (e) {
            console.log(e);
        }
    }


}



export default ApplicationStore;