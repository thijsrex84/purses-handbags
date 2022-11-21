import React from 'react';
import './App.css';
import Button from "./Components/Button";
import TheHandyBag from "./assets/bag_1.png"
import TheStylishBag from "./assets/bag_2.png"
import TheSimpleBag from "./assets/bag_3.png"
import TheTrendyBag from "./assets/bag_4.png"
import Product from "./Components/Product";
import Brand from "./assets/brand.png"
import Our_story from "./assets/our_story.png"
import Tile from "./Components/Tile";

function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
          <nav className="nav">
              <Button text="to the collection" toTheConsole="to the collection" ></Button>
              <Button text="shop all bags" toTheConsole="shop all bags" ></Button>
              <Button text="pre-orders" toTheConsole="pre-orders" toBeDisabled="false"></Button>
          </nav>
          <main className="main">
            <Product labeltext="Best seller" price="€400" Bagtext="The handy bag" image={TheHandyBag}></Product>
            <Product labeltext="Best seller" price="€250" Bagtext="The stylish bag" image={TheStylishBag}></Product>
            <Product labeltext="New collection" price="300" Bagtext="The simple bag" image={TheSimpleBag}></Product>
            <Product labeltext="New collection" price="150" Bagtext="The trendy bag" image={TheTrendyBag}></Product>
          </main>
          <footer className="footer">
              <section className="section p">
                  <Tile title="THE BRAND">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae dicta distinctio eligendi ex laudantium maiores molestiae placeat, qui soluta?</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae dicta distinctio eligendi ex laudantium maiores molestiae placeat, qui soluta?</p>
                  </Tile>
              </section>
              <section className="section">
                <Tile image={Brand} alt="brand"></Tile>
              </section>
              <section className="section">
                 <Tile image={Our_story} alt="our_story"></Tile>
              </section>
              <section className="section p">
                  <Tile title="OUR STORY" ><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi labore natus neque officiis perspiciatis quae saepe sapiente tenetur voluptates. Ab autem est quae quaerat quasi sed sit? Aliquid assumenda aut autem beatae culpa debitis doloribus excepturi, exercitationem molestias voluptas. Architecto?</p></Tile>
              </section>
          </footer>

        </>
  );
}

export default App;



