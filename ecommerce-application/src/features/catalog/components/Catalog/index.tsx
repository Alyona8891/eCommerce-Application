import { ProductProjection } from '@commercetools/platform-sdk';
import { useEffect, useState } from 'react';
import {
  getFilteredProductList,
  getProductsList,
} from '../../../../api/requests';
import { Loader } from '../../../../components/Loader';
import { ProductCard } from '../ProductCard';
import { CatalogSidebar } from '../Sidebar';
import styles from './Catalog.module.scss';

// eslint-disable-next-line max-lines-per-function
export function Catalog(): React.ReactElement {
  const [products, setProducts] = useState<ProductProjection[]>([]);
  const [catalog, setCatalog] = useState<JSX.Element[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    getProductsList().then(
      (result) => {
        setProducts(result.body.results);
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
      },
    );
  }, []);

  const getBrandsFromProducts = (productList: ProductProjection[]): void => {
    const brandsList = productList.map((product: ProductProjection) =>
      product.masterVariant.attributes
        ? product.masterVariant.attributes[0].value
        : 'good food',
    );
    setBrands([...new Set(brandsList)]);
  };
  useEffect(() => {
    console.log(products);
    const data = products.map((product) => (
      <li key={product.id} className={styles.item}>
        <ProductCard product={product} />
      </li>
    ));
    setCatalog(data);
    getBrandsFromProducts(products);
  }, [products]);

  const getFilteredProducts = async (...args: []): Promise<void> => {
    setIsLoading(true);
    const filterQueryStrings = args.map((arg, i): string => {
      if (i === 0) return `categories.id: subtree("${arg}")`;
      if (i === 1) return `variants.attributes.origin.key:"${arg}"`;
      return `variants.attributes.trademark:"${arg}"`;
    });

    await getFilteredProductList(filterQueryStrings).then(
      (result) => {
        setProducts(result.body.results);
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  return (
    <div className={styles.catalog}>
      <CatalogSidebar categoryFilter={getFilteredProducts} brands={brands} />
      <ul className={styles.grid}>{!isLoading ? catalog : <Loader />}</ul>
    </div>
  );
}
