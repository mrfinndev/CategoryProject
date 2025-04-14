import CategoryCard from "./CategoryCard";

// Array of object called categories, each category has an id, name, description, and image URL
const categories = [
  {
    id: 1,
    name: "Technology",
    description: "Latest trends in technology",
    imageUrl:
      "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Health",
    description: "Health and wellness tips",
    imageUrl:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Business",
    description: "Business and finance news",
    imageUrl:
      "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Lifestyle",
    description: "Lifestyle and culture",
    imageUrl:
      "https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg?auto=compress&cs=tinysrgb&w=600",
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
