import Swal from "sweetalert2";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";

const AddBooks = () => {
  const axiosPublic = useAxiosPublic();

  const handleBooks = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = form.title.valueOf;
    const author = form.author.value;
    const price = form.price.value;
    const category = form.category.value;
    const image = form.image.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const bookData = {
      title,
      author,
      price: parseFloat(price),
      category,
      image,
      quantity: parseInt(quantity, 10),
      description,
    };

    try {
      // Send the book data to the server
      const response = await axiosPublic.post(
        "/products/create-book",
        bookData
      );
      console.log(response);

      if (response.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Book Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        // Reset the form after successful submission
        form.reset();
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to Create Book",
          showConfirmButton: true,
        });
      }
    } catch (err) {
      console.error("Add book error:", err);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to Add Book",
        text: "An error occurred while adding the book.",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="px-4 md:px-14 w-full">
      <section className="text-black py-8">
        <h2 className="text-2xl text-center mb-6">Add Books</h2>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg p-6 md:p-12">
            <form onSubmit={handleBooks} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="title">
                  Title
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Enter Book Title"
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
