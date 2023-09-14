import "./App.css";
import { BookShelf } from "./component/BookShelf.tsx";
import { Search } from "./component/Search.tsx";
import { SortsAndFilters } from "./component/SortsAndFilters.tsx";

export const App = () => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Search />
      <SortsAndFilters />
      <BookShelf />
    </div>
  );
};
