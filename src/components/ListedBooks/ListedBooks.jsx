// import PropTypes from 'prop-types'

function ListedBooks() {
  return (
    <div>
      <div className="py-12 my-8 text-center rounded-lg bg-[#f3f3f3]">
        <h2 className="text-2xl font-bold">Books</h2>
      </div>

      <div className="flex flex-row items-center justify-center ">
        <select
          className="font-semibold text-white bg-[#23be0a] rounded-lg select select-success"
          defaultValue="Sort By"
        >
          <option disabled={true}>Sort By</option>
          <option>Rating</option>
          <option>Number of pages</option>
          <option>Published year</option>
        </select>
      </div>
    </div>
  );
}

// ListedBooks.propTypes = {}

export default ListedBooks;
