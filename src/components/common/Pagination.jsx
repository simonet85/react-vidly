import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemCount, pageSize } = props;
  //The total number of film && the total number of page, equiv au nombre de film par page
  const pageCount = Math.ceil(itemCount / pageSize);
  //create an array of positive number: [1,....n+1]
  const pages = _.range(1, pageCount + 1);
//   console.log(pageCount);
  if (pageCount === 1) {
    return null;
  }
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pages.map(page => (
          <li className="page-item " key={page}>
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
