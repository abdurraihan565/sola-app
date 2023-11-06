import React, { useEffect, useState } from 'react';

import data from '../data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Home() {
  /*<div className="result_title">
<h1>Showing Result... </h1>
</div> */
  const [searchProducts, setsearchProducts] = useState([]);
  const [searchData, setsearchData] = useState([]);
  console.log(searchData);
  const [searchText, setSearchText] = useState('');

  const handleClick = () => {
    setsearchData(searchProducts);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    let value = searchText.toLowerCase();
    const newProducts = data.products.filter((product) => {
      const productsName = product.name.toLowerCase();
      return productsName.startsWith(value);
    });
    setsearchProducts(newProducts);
  };

  useEffect(() => {}, [searchText]);

  return (
    <section>
      <div className="search_containner">
        <div className="search_containner_des">
          <h1>
            <span>GET SPACIAL</span> OFFER ON{' '}
          </h1>
          <h2>FITTING YOUR BODY !</h2>
          <p>
            Physically exercises are great for our muscles, heart, and lungs.
            Some more advantages of the physical activities are; it builds our
            bones strong, saves us from obesity by promoting a healthy weight,
            saves us from diabetes, helps us to build healthy habits, keeps us
            away from cancer, prevents high blood pressure, and other major
            problems. Thus, through regular exercises and healthy food in timely
            manner, we can easily maintain our health and fitness.
          </p>
          <br></br>
          <div className="btn">
            <input
              type="text"
              placeholder="serarch..."
              value={searchText}
              onChange={handleChange}
            />

            <i class="fa-solid fa-magnifying-glass" onClick={handleClick}></i>
          </div>
        </div>
        <div className="hero_image">
          <img src="images/h18.gif" alt="" />
        </div>
      </div>

      <div className="fitness_containner">
        {searchData.map((product) => {
          const { name, id, image, slug, step1, step2, step3 } = product;
          return (
            <div key={id} className="fitness_products">
              <img src={image} alt="gif" />
              <div className="fitness_btn">
                <h6>{name}</h6>
                <Link
                  to={`/fitness-datails/${slug}`}
                  state={{ id, name, image, step1, step2, step3 }}
                >
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="fitness_containner">
        {data.products.map((product) => {
          const { name, id, image, slug, step1, step2, step3 } = product;
          return (
            <div key={id} className="fitness_products">
              <img src={image} alt="gif" />
              <div className="fitness_btn">
                <h6>{name}</h6>
                <Link
                  to={`/fitness-datails/${slug}`}
                  state={{ id, name, image, step1, step2, step3 }}
                >
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
