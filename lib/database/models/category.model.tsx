import { Document, Schema, model, models } from "mongoose";

export interface ICaregory extends Document{
    _id:String,
    name:String,
}
const categorySchema = new Schema({
    name:{type:String,require:true,unique:true}
})

const Category = models.Category || model('Category',categorySchema);

export default Category;