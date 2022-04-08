import React from "react";
import { Link } from "wouter";
import "./category.css";

export default function Category({ name, options = [], ...props }) {
  return (
    <div className={props.className}>
      <h4 className="Category-title">Categoria {name}</h4>
      <ul className="Category-list">
        {options.map((singleOption) => (
          <li className="Category-link" key={singleOption}>
            <Link to={`/gif/${singleOption}`} className="Category-link">
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
