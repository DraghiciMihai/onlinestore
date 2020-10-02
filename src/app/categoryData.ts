export class CategoryData{
id:number;
name:string;
subcategory:CategoryData;
parentCategory:CategoryData

toString(): string {
    return 'id=' + this.id + ', name=' + this.name;
}

}