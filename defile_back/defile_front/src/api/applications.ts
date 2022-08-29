import { $authHost, $host } from ".";
import { IBrand, ICategory, IProduct } from "../store/ProductStore";


export interface ISlide {
    id: number,
   title: String,
   description: String,
   photo: String
}

export interface IPagePhoto {
   id: number,
   photo: string
}


export interface IPage {
   id: number,
   title: String,
   content: string,
   photos: IPagePhoto[]
}

export default class ApplicationService {

   async getCategories() {
      return await $host.get<ISlide[]>('/api/core/slides/');
   }

   async getPage(slug?:string) {
      return await $host.get<IPage>(`/api/core/page/${slug}/`);
   }

}