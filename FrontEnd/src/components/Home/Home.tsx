import React from 'react';
import './Home.css';
import Sidebar from '../Sidebar';
import BookList from '../BookList';
import Header from '../Header';
import Footer from '../Footer';

const Home: React.FC = () => {
  return (
    <section className="wrapper bg-primary">
      <header className="header bg-white"><Header/></header>
      <aside className="aside bg-primary"><Sidebar/></aside>
      <main className="main bg-primary"><BookList/></main>
      <footer className="footer bg-white"><Footer/></footer>
    </section>
  );
};

export default Home;
