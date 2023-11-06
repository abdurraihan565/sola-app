import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import data from '../data';

function Fitness() {
  const { name } = useParams();
  const location = useLocation();
  console.log(location);

  return (
    <section>
      <div className="fitness_ctn">
        <img src={location.state.image} alt="" />
        <div className="fitness_dsc">
          <h1>{location.state.name}</h1>
          <p>
            <span>STEP 1: </span>
            {location.state.step1}
          </p>
          <p>
            <span>STEP 2: </span>
            {location.state.step2}
          </p>
          <p>
            <span>STEP 3: </span>
            {location.state.step3}
          </p>
        </div>
      </div>
      <div>
        <div className="fitness_containner">
          <h1 className="fitness_ctn_h">RELETED WORKOUT...</h1>
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
      </div>
    </section>
  );
}

export default Fitness;
