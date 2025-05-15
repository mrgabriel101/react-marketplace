import React, { useContext } from 'react';
import ProductButton from './ProductButton';
import { ProductsContext } from '../context/ProductsContext';
import { useParams } from 'react-router-dom';
import { formatDiscount, formatFinalPrice, formatPrice } from '../priceUtils';

const ProductDetail = () => {
  const products = useContext(ProductsContext);
  const { productId } = useParams();
  /*   const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    setProductInfo(() =>
      products.find((product) => product.id === parseInt(productId, 10))
    );
  }, [products, productId]); */

  const productInfo = products.find(
    (product) => product.id === parseInt(productId, 10)
  );
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="image col-lg-5">
            {
              <img
                className="img-fluid"
                src={`/${productInfo?.img}`}
                alt={productInfo?.name}
              />
            }
          </div>
          <div className="col-lg-6">
            <div className="title">
              <h1>{productInfo?.name}</h1>
            </div>
            <div className="row">
              <div className="col-lg-6 price">
                <p className="finalPrice">
                  {formatFinalPrice(productInfo?.price, productInfo?.discount)}
                </p>
                <p className="discount">
                  {formatDiscount(productInfo?.discount)}
                </p>
                <p className="oldPrice">{formatPrice(productInfo?.price)}</p>
              </div>
              <div className="col-lg-6">
                <ProductButton product={productInfo}></ProductButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
