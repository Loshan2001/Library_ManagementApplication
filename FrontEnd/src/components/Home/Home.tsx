import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar";
import BookList from "../BookList";
import Header from "../Header";
import Footer from "../Footer";

const Home: React.FC = () => {
  return (
    <>
     <section className=" h-screen bg-primary">
      <header className="header bg-white">
        <Header />
      </header>
      <aside className="aside bg-primary">
        <Sidebar />
      </aside>
      <main className="main bg-primary">
        <BookList />
      </main>
      
    </section>
    
    </>
   
  );
};

export default Home;
