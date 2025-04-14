import CategoryCard from "./CategoryCard";
// Array of objects called categories
const categories = [
  {
    id: 1,
    name: "Technology",
    description: "Latest trends in technology",
    imageUrl: "/src/assets/image/one.jpg",
  },
  {
    id: 2,
    name: "Health",
    description: "Health and wellness tips",
    imageUrl: "/src/assets/image/two.jpg",
  },
  {
    id: 3,
    name: "Business",
    description: "Business and finance news",
    imageUrl: "/src/assets/image/three.jpg",
  },
  {
    id: 4,
    name: "Lifestyle",
    description: "Lifestyle and culture",
    imageUrl: "/src/assets/image/four.jpg",
  },
];

// CategoryContainer component, that will display all the category cards

const CategoryContainer = () => {
  return (
    //    This is the container  that holds all the categories for cards
    <div className="category_container">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          name={category.name}
          description={category.description}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
};

export default CategoryContainer;
