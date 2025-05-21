import { useEffect, useState} from "react";
import Base from "./Base";

export default function Home() 
{
  // let respone = fetch('https://dummyjson.com/products')
  //   let data = respone.json()
  //   console.log(data);

  let [products, setProducts] = useState([]);
  console.log(products);

  async function fetchProduct() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    console.log(data);
    setProducts(data.products);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
    <Base/>
    <div className="container">
      <div className="row">
        {
          products && products.map((products,index)=>{
            return(
              <>
              <div className="col-md-3 key={products.id}" >
                  <div className="card" style={{width: 15+"rem"}}>
                      <img src={products.thumbnail} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{products.title}</h5>
                        <p className="card-text">{products.description}</p>
                        <a href="#" className="btn btn-primary">{products.price}</a>
                      </div>
                    </div>
                  </div>
              </>
            )
          }) 
        }
      </div>
    </div>
      </>
  )
}