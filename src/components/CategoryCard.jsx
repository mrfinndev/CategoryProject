import React from "react";

const CategoryCard = ({ name, description, imageUrl }) => {
  return (
    <div className="category_card">
      {/* Displaying the category of image}*/}
      <img src={imageUrl} alt={name} className="category_image" />

      {/* Displaying the category of name */}
      <h3>{name}</h3>
      {/* Displaying the category of description */}
      <p>{description}</p>
    </div>
  );
};

export default CategoryCard;
