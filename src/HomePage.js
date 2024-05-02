import { Button } from "flowbite-react";
import { Alert } from "flowbite-react";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(../img/bg-image.jpg)` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Our game selling website offers a diverse range of the latest video games across all platforms at competitive prices,
              providing a convenient and hassle-free shopping experience for gamers.
            </p>
            <Link to="/about">
              <button className="btn btn-primary">Get Started</button>
            </Link>

          </div>
        </div>
      </div>

      <br />
      {/* <Button color="blue">Blue</Button>
      <Alert color="info">
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </Alert> */}

      <br></br>
      <br></br>
      <br></br>

      <h1 className="text-3xl" id="Browse">&nbsp;&nbsp; Hot Games &gt;</h1>

      <div>
        <div className="carousel carousel-center max-w-full p-6 space-x-7 bg-neutral rounded-box bg-zinc-900">
          {/* Product Item Repeater */}
          {/* {productData.map(product => (
            <div className="carousel-item" key={product.productId}>
              <div className="card w-96 glass">
                <figure>
                  <img src={`../img/product/productCover/${product.image}`}
                    style={{ width: '300px', height: '300px' }} alt={product.name}
                  />
                </figure>
                <div className="card-body text-white">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end">
                    <a href={`/client/Product?id=${encodeURIComponent(product.productId)}`}
                      className="btn btn-primary m-4">{product.price}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>

    </div>

  );
}

export default HomePage;

