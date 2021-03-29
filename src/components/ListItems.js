import React from "react";
import "./ListItems.css";
const ListItems = ({ items, deleteClick, editItem }) => {
  const item = items.map((item) => {
    return (
      <div key={item.id}>
        <ul>
          <li>
            {item.todo}
            <div>
              <span>
                <i
                  className="fa fa-pencil"
                  aria-hidden="true"
                  onClick={() => editItem(item.id)}
                ></i>
              </span>
              <span>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => deleteClick(item.id)}
                ></i>
              </span>
            </div>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div className="list-todo">
      <p className="text-todo">You should do...</p>
      {item}
    </div>
  );
};
export default ListItems;
