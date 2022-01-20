import React, { useEffect, useState } from "react";
import styles from "./book-table.module.scss";

const BookTable = ({ query }) => {
  const [books, setBooks] = useState([]);
  const [currentSort, setCurrentSort] = useState({ column: '', direction: '' });

  const getSortIcon = (columnToSort) => {
    if (columnToSort === currentSort.column && currentSort.direction === "asc") {
      return <>&#9650;</>
    } else if (columnToSort === currentSort.column && currentSort.direction === "desc") {
      return <>&#9660;</>
    }
    return;
  }

  useEffect(() => {
    const booksToUpdate = [...books];
    booksToUpdate.sort((f,s) => {
      switch(currentSort.direction) {
        case "asc":
          if (f[currentSort.column] < s[currentSort.column]) return -1;
          if (f[currentSort.column] > s[currentSort.column]) return 1;
          return 0;
        case "desc":
          if (f[currentSort.column] > s[currentSort.column]) return -1;
          if (f[currentSort.column] < s[currentSort.column]) return 1;
          return 0;
        default:
          break;
      }
    })
    setBooks(booksToUpdate);
  }, [currentSort])

  useEffect(() => {
    if (!query) {
      setBooks([]);
      return;
    }
    fetch(`https://openlibrary.org/search.json?q=${query}&fields=author_name,title,cover_i,first_publish_year`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      }).then(data => {
        setBooks(data.docs);
      }).catch(err => console.error(err));
  }, [query]);

  if (!books.length) {
    return <p className={styles["fea-no-books"]}>No Books to Display...</p>;
  }

  return (
    <table className={styles["fea-book-table"]} cellSpacing={0}>
      <colgroup>
        <col span="1" style={{ width: "20%" }} />
        <col span="1" style={{ width: "30%" }} />
        <col span="1" style={{ width: "20%" }} />
        <col span="1" style={{ width: "25%" }} />
      </colgroup>
      <thead>
        <tr>
          <th 
            onClick={() => setCurrentSort({
              column: 'title',
              direction: currentSort.column === 'title' && currentSort.direction === "asc" ? "desc" : "asc"
            })}
          >
            Title {getSortIcon('title')}
          </th>
          <th>Book Cover</th>
          <th>Author</th>
          <th
            onClick={() => setCurrentSort({
              column: 'first_publish_year',
              direction: currentSort.column === 'first_publish_year' && currentSort.direction === "asc" ? "desc" : "asc"
            })}
          >
            Published Date {getSortIcon('first_publish_year')}
          </th>
        </tr>
      </thead>
      <tbody>
        {books && books.map((book, index) =>
          <tr key={index + (book.author_name || "")}>
            <td
              tabIndex={0}
            >
              {book.title}
            </td>
            <td
              tabIndex={0}
            >
              <img
                alt={`${book.title} by: ${book.author_name}. Published: ${book.first_publish_year}`}
                src={book.cover_i && `https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}
              />
            </td>
            <td
              tabIndex={0}
            >   
              {book.author_name || "Not Available..."}
            </td>
            <td
              tabIndex={0}
            >
              {book.first_publish_year}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default BookTable;