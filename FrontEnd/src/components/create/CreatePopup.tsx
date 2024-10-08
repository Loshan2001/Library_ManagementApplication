import React from "react";
import axios from "axios";
import {BookSchema} from '../validation/BookValidation'
import Swal from 'sweetalert2';
//react hook form give as display error and handling form
import {useForm} from 'react-hook-form'
//to integrate the yup and react hook form 
import {yupResolver} from '@hookform/resolvers/yup'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface CreatePopupProps {
  onClose: () => void;
}

const CreatePopup: React.FC<CreatePopupProps> = ({ onClose }) => {

  
  //register function get the input validation
  const {register, handleSubmit , formState : {errors}} = useForm(
    {
      // we specify how our schema look like
      //give a schma to resolver using yupResolver
      resolver: yupResolver(BookSchema)
    }
  )
 // Function to handle form submission
 const createBook =  (data: unknown) => {
 
    // Sending a POST request to the backend
   axios.post('http://localhost:5271/book', data).then((res)=>{
    console.log(res.data)
// Show success message
    Swal.fire({
      icon: 'success',
      title: 'Book Added',
      text: 'The book was added successfully!',
      
    });
    // Close the form dialog
    onClose();
    window.location.reload();

   }).catch((err)=>{
    console.error("Error adding book:", err);
    // Optionally, show an error message if the API request fails
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was a problem adding the book. Please try again.',
    });
   })
    
    
    
  } 
   
 

 
  return (
    <Dialog open={true} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
          <div className="px-6 pb-6 pt-5 sm:p-6">
            <DialogTitle
              as="h3"
              className="text-lg font-semibold leading-6 text-gray-900"
            >
              Add New Book
            </DialogTitle>
            <div className="mt-4">
              <form  onSubmit={handleSubmit(createBook)} className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="title"
                    className="text-sm font-medium text-gray-700"
                  >
                    Book Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    required
                    {...register("Title")}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                  <span  className="text-red">{errors.Title?.message}</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="description"
                    className="text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    {...register("Description")}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                   <span  className="text-red">{errors.Description?.message}</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="author"
                    className="text-sm font-medium text-gray-700"
                  >
                    Author
                  </label>
                  <input
                    type="text"
                    id="author"
                    {...register("Author")}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                   <span  className="text-red">{errors.Author?.message}</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="author"
                    className="text-sm font-medium text-gray-700"
                  >
                   Image URL
                  </label>
                  <input
                    type="text"
                    id="author"
                    {...register("Image")}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                   <span  className="text-red">{errors.Image?.message}</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="type"
                    className="text-sm font-medium text-gray-700"
                  >
                    Type
                  </label>
                  <select
                    id="type"
                    {...register("Type")}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white"
                  >
                    <option value="Fairy Tale">Fairy Tale</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Comics">Comics</option>
                    <option value="Mystery">Mystery</option>
                  </select>
                  <span className="text-red">{errors.Type?.message}</span>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CreatePopup;
