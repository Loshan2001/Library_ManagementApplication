import * as yup from 'yup'

//create validation schema
export const BookSchema = yup.object().shape({
   
    Title: yup.string().min(5).max(200).required(),
    Description:yup.string().max(1000).required(),
    Image:yup.string().required(),
    Author:yup.string().max(100).required(),
    Type:yup.string().max(50).required()
})

