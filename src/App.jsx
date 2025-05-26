import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
// database
import products from "./db/data";
import Card from "./components/Card";

function App() {
  
  // toggle sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev)=>!prev);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // ************Input Filter************

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(query)
  };

   const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // const filteredItems = products.filter((product) =>
  //   product.title.toLowerCase().includes(query.toLowerCase())
  // );

  // ************Radio Filter************
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ************Buttons Filter************
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, title, newPrice }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          title === selected ||
          newPrice === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          title={title}
          img={img}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} isOpen={isSidebarOpen}  />
      {/* Hamburger for small screens */}
      {/* Hamburger Button */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded shadow"
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* Optional overlay for mobile */}
       {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-30 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      <div className="flex-1 ml-0 ">
        <Nav query={query} handleInputChange={handleInputChange} toggleSidebar={toggleSidebar} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />

      </div>
    </>
  );
}

export default App;
