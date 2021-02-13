import ReactDom from "react-dom";

import "./index.css";

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51IwU2FmB6L._SX327_BO1,204,203,200_.jpg",
  title: "The Four Winds: A Novel",
  author: "Kristin Hannah",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/41KE4efwCvL.jpg",
  title:
    "How the One-Armed Sister Sweeps Her House: A powerful, heart-wrenching novel of the other side of an island paradise ",
  author: "Cherie Jones",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        <p>Note: Nice Book</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
    </section>
  );
}

const Book = ({ title, img, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
