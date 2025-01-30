
const AddBooks = () => {
  return (
    <div className="px-4 md:px-14 w-full"> 
      <section className="text-black py-8"> 
        <h2 className="text-2xl text-center mb-6"> 
          Add Books
        </h2>
        <div className="max-w-4xl mx-auto"> 
          <div className="rounded-lg shadow-lg p-6 md:p-12"> 
            <form  className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="title">
                  Title
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Enter Book title"
                  type="text"
                  name="title"
                  id="title" 
                  required 
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="author">
                    Author
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Author Name"
                    type="text" 
                    name="author"
                    id="author" 
                    required 
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="price">
                    Price
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Price"
                    type="number" 
                    name="price"
                    id="price" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="sr-only" htmlFor="category">
                    Category
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Category"
                    type="text"
                    name="category"
                    id="category" 
                    required 
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="image">
                    Image URL
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Image URL"
                    type="url" 
                    name="image"
                    id="image" 
                    required 
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="quantity">
                    Quantity
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Quantity"
                    type="number"
                    name="quantity"
                    id="quantity" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Description"
                  name="description"
                  id="description"
                  rows={4}
                  required 
                ></textarea>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-teal-800 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Create a Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBooks;