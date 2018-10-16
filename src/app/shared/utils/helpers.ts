import { Router } from "@angular/router";
import { TdPagingBarComponent } from "@covalent/core";

export class Helpers{


    is_value_empty(value:any){
        if(value != '' || value != null){
            return false;
        }
        return true;
    }

    changeFilter(event: any, pagingBar:TdPagingBarComponent, router:Router , url:string) {
        console.log(event,'changeFilter on Helpers');
        const actual_category = event.value;
        pagingBar.navigateToPage(1);//this navigates to specific valid page
        router.navigate([url, actual_category, { 'page': 1 }]);
    }

}