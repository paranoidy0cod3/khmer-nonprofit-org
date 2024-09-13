import { useState } from 'react';

const SearchBar = () => {
  const [keywords, setKeywords] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle search logic here, e.g., call an API with keywords and category
    console.log('Keywords:', keywords);
    console.log('Category:', selectedCategory);
  };

  return (
    <div className="bg-gray-800 text-white p-8 my-8 w-full ">
      <h2 className="text-xl font-bold mb-4">Search For Causes</h2>
      <p className="text-gray-400 mb-4">
        Please fill keywords in the text box and select a particular category to search for all causes.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-4  flex-wrap md:flex-nowrap">
        <input
          type="text"
          placeholder="Keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="md:flex-1  border border-gray-700 px-4 py-2 mr-2"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border  px-4 py-2 text-black"
        >
          <option value="">Category</option>
          {/* Add your category options here */}
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          {/* ... more categories */}
        </select>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ">SEARCH</button>
      </form>
    </div>
  );
};

export default SearchBar;