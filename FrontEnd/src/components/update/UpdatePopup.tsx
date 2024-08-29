import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface UpdatePopupProps {
  onClose: () => void;
}

const UpdatePopup: React.FC<UpdatePopupProps> = ({ onClose }) => {
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
              <form className="space-y-4">
                {/* Form fields */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="title" className="text-sm font-medium text-gray-700">
                    Book Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="description" className="text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="author" className="text-sm font-medium text-gray-700">
                    Author
                  </label>
                  <input
                    type="text"
                    id="author"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="image" className="text-sm font-medium text-gray-700">
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="image"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="type" className="text-sm font-medium text-gray-700">
                    Type
                  </label>
                  <select
                    id="type"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white"
                  >
                    <option value="Fairy Tale">Fairy Tale</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Comics">Comics</option>
                    <option value="Mystery">Mystery</option>
                  </select>
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
}

export default UpdatePopup;
