
export interface Book {
    title: string;
    author: string;
    description: string;
    type: string;
    image: string;
  }
  
  const bookList: Book[] = [
    {
      title: "The Enchanted Forest",
      author: "Emma Woodhouse",
      description: "A magical journey through a mystical forest where every tree holds a secret. Perfect for readers who enjoy fantasy and adventure.",
      type: "Fantasy",
      image: "https://example.com/images/the-enchanted-forest.jpg"
    },
    {
      title: "The Silent Ocean",
      author: "John Waters",
      description: "An enthralling mystery set on the high seas, where a detective uncovers hidden truths beneath the calm surface of the ocean.",
      type: "Mystery",
      image: "https://example.com/images/the-silent-ocean.jpg"
    },
    {
      title: "Cooking Made Simple",
      author: "Sophia Green",
      description: "A straightforward cookbook with easy-to-follow recipes and tips for busy individuals who love delicious food without the fuss.",
      type: "Fiction",
      image: "https://example.com/images/cooking-made-simple.jpg"
    },
    {
      title: "The Wonders of Space",
      author: "Michael Roberts",
      description: "An educational and visually stunning book that explores the vastness of space and the wonders it holds, perfect for aspiring young astronomers.",
      type: "Fantacy",
      image: "https://example.com/images/the-wonders-of-space.jpg"
    },
    {
      title: "Life in the City",
      author: "Laura Williams",
      description: "A captivating collection of short stories about the diverse lives and experiences of people living in a bustling city.",
      type: "ShortStories",
      image: "https://example.com/images/life-in-the-city.jpg"
    }
  ];
  
 
  export default bookList;