
export interface Book {
    id:number;
    title: string;
    author: string;
    description: string;
    type: string;
    image: string;
  }
  
  const bookList: Book[] = [
    {
      id:1,
      title: "The Enchanted Forest",
      author: "Emma Woodhouse",
      description: "A magical journey through a mystical forest where every tree holds a secret. Perfect for readers who enjoy fantasy and adventure.",
      type: "Fantasy",
      image: "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
    },
    {
      id:2,
      title: "The Silent Ocean",
      author: "John Waters",
      description: "An enthralling mystery set on the high seas, where a detective uncovers hidden truths beneath the calm surface of the ocean.",
      type: "Mystery",
      image: "https://cdn.vectorstock.com/i/1000v/33/05/comic-book-cover-template-vector-16193305.jpg"
    },
    {
      id:3,
      title: "Cooking Made Simple",
      author: "Sophia Green",
      description: "A straightforward cookbook with easy-to-follow recipes and tips for busy individuals who love delicious food without the fuss.",
      type: "Fiction",
      image: "https://i.pinimg.com/originals/26/5d/97/265d97583a147c6f38d8cb9f6f7a7ba5.jpg"
    },
    {
      id:4,
      title: "The Wonders of Space",
      author: "Michael Roberts",
      description: "An educational and visually stunning book that explores the vastness of space and the wonders it holds, perfect for aspiring young astronomers.",
      type: "Fantacy",
      image: "https://i.pinimg.com/736x/ac/2a/93/ac2a931f4f2d886b5e1ab3d5ab498ed3.jpg"
    },
    {
      id:5,
      title: "Life in the City",
      author: "Laura Williams",
      description: "A captivating collection of short stories about the diverse lives and experiences of people living in a bustling city.",
      type: "ShortStories",
      image: "https://www.shutterstock.com/create/assets/asset-gateway/template/previews/26966-0.png?width=900&format=webp"
    },
    {
      id:6,
      title: "Life in the City",
      author: "Laura Williams",
      description: "A captivating collection of short stories about the diverse lives and experiences of people living in a bustling city.",
      type: "ShortStories",
      image: "https://images.template.net/313496/Untitled-edit-online-1.jpg"
    },
    
  ];
  
 
  export default bookList;