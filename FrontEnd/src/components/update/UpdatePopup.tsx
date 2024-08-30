import React, { useEffect, useState } from "react";
import { BookSchema } from '../validation/BookValidation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import axios from "axios";

interface UpdatePopupProps {
  onClose: () => void;
  bookId: number;
}

interface BookFormValues {
  Title: string;
  Author: string;
  Description: string;
  Image: string;
  Type: string;
}

const UpdatePopup: React.FC<UpdatePopupProps> = ({ onClose, bookId }) => {
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<BookFormValues>({
    resolver: yupResolver(BookSchema),
    defaultValues: {
      Title: '',
      Author: '',
      Description: '',
      Image: '',
      Type: ''
    }
  });

  useEffect(() => {
    axios.get(`http://localhost:5271/Onebook/${bookId}`).then((res) => {
      // set the value of a specific form field.
      setValue('Title', res.data.title);
      setValue('Author', res.data.author);
      setValue('Description', res.data.description);
      setValue('Image', res.data.image);
      setValue('Type', res.data.type);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [bookId, setValue]);

  const onSubmit: SubmitHandler<BookFormValues> = (data) => {
    // console.log('Form Data:', data);
    axios.put(`http://localhost:5271/books/${bookId}`, data)
      .then((res) => {
        console.log('Update Response:', res.data);
        // Show success alert and reload the page after confirmation
        Swal.fire({
          title: 'Success!',
          text: 'The book has been updated.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((err) => {
        console.log('Update Error:', err);
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
    onClose();
  };
//Ensure Data is Loaded Before Rendering the Form
  if (loading) return <div>Loading...</div>;

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
              Update Book
            </DialogTitle>
            <div className="mt-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="title" className="text-sm font-medium text-gray-700">
                    Book Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    {...register("Title")}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                  <span className="text-red">{errors.Title?.message}</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="description" className="text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    {...register("Description")}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                  <span className="text-red">{errors.Description?.message}</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="author" className="text-sm font-medium text-gray-700">
                    Author
                  </label>
                  <input
                    type="text"
                    id="author"
                    {...register("Author")}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                  <span className="text-red">{errors.Author?.message}</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="image" className="text-sm font-medium text-gray-700">
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="image"
                    {...register("Image")}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                  <span className="text-red">{errors.Image?.message}</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="type" className="text-sm font-medium text-gray-700">
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
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default UpdatePopup;
