import "./App.css";
import { BookPage } from "./component/BookPage.tsx";
import { BookShelf } from "./component/BookShelf.tsx";
import { Search } from "./component/Search.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <main
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <header>
          <Search />
        </header>
        <Routes>
          <Route exact path="*" element={<h1>404: Page not found</h1>} />
          <Route exact path="/" element={<BookShelf />} />
          <Route exact path="/books/*" element={<BookPage />} />
        </Routes>
      </main>
    </Router>
  );
};
