import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./bars/Navbar";
import Sidebar from "./bars/Sidebar";
import Books from "./books/Books";
import Authors from "./authors/Authors";
import AddAuthor from "./authors/AddAuthor";
import EditsAuthor from "./authors/EditsAuthor";
import ViewAuthor from "./authors/ViewAuthor";
import AddBooks from "./books/AddBooks";
import EditsBooks from "./books/EditsBooks";
import ViewBooks from "./books/ViewBooks";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div className="content">
          <Navbar />
          <div className="container-fluid">
            <Routes>
              <Route path="/authors" element={<Authors />} />
              <Route path="/addauthor" element={<AddAuthor />} />
              <Route path="/editauthor/:id" element={<EditsAuthor />} />
              <Route path="/viewauthor/:id" element={<ViewAuthor />} />
              <Route path="/books" element={<Books />} />
              <Route path="/addbooks" element={<AddBooks />} />
              <Route path="/editbooks/:id" element={<EditsBooks />} />
              <Route path="/viewbooks/:id" element={<ViewBooks />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
