import Header from "./componets/Header";
import Login from "./componets/Login";
import Dashboard from "./componets/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from "react";

function App() {

  // const url = "http://localhost:3001/getDetails";

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resp = await axios.get('http://localhost:5001/products');
        setProducts(resp.data.data);
        console.log(resp.data);
        console.log(products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [products]);
  console.log(products.data);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Pass 'prods' as a prop to the Dashboard component */}
          {/* <Route path="/dashboard" element={<Dashboard products={prods} />} > */}
          <Route path="/dashboard" element={<Dashboard products={products} />} >
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
