import React, { useEffect, useState } from "react";
import styles from "./book-table.module.scss";

const BookTable = ({ query }) => {
  const [books, setBooks] = useState([]);
  const [currentSort, setCurrentSort] = useState({ column: '', direction: '' });

  useEffect(() => {
    if (!query) return;
    fetch(`http://openlibrary.org/search.json?q=${query}&fields=author_name,title,cover_i,first_publish_year`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      }).then(data => {
        console.log(data.docs)
        setBooks(data.docs);
      }).catch(err => console.error(err));
  }, [query]);

  return (
    <table className={styles["book-table"]} cellSpacing={0}>
      <colgroup>
        <col span="1" style={{ width: "20%" }} />
        <col span="1" style={{ width: "35%" }} />
        <col span="1" style={{ width: "20%" }} />
        <col span="1" style={{ width: "20%" }} />
      </colgroup>
      <thead>
        <tr>
          <th>Title</th>
          <th>Book Cover</th>
          <th>Author</th>
          <th>Published Date</th>
        </tr>
      </thead>
      <tbody>
        {books && books.map((book) =>
          <tr key={book.author_name + book.first_publish_year}>
            <td
              style={{ borderBottom: 'black solid 1px', textAlign: "center", paddingTop: "1em", paddingBottom: "1em" }}
              tabIndex={0}
            >
              {book.title}
            </td>
            <td
              style={{ borderBottom: 'black solid 1px', textAlign: "center", paddingTop: "1em", paddingBottom: "1em" }}
              tabIndex={0}
            >
              <img
                alt={`${book.title} by: ${book.author_name}. Published: ${book.first_publish_year}`}
                src={book.cover_i && `https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}
              />
            </td>
            <td
              style={{ borderBottom: 'black solid 1px', textAlign: "center", paddingTop: "1em", paddingBottom: "1em" }}
              tabIndex={0}
            >   
              {book.author_name}
            </td>
            <td
              style={{ borderBottom: 'black solid 1px', textAlign: "center", paddingTop: "1em", paddingBottom: "1em" }}
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