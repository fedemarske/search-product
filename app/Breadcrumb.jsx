import React from 'react'

const Breadcrumb = (props) => (
      <nav aria-label="breadcrumb">
        <ol className="flex-container breadcrumb">
          {props.categories.map((category) => <li className="breadcrumb-item" key={category}>{category}</li>)}
        </ol>
      </nav>
    );

export default Breadcrumb
