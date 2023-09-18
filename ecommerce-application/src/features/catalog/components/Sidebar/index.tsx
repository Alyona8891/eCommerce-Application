import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  CSSObject,
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  menuClasses,
  sidebarClasses,
} from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import Select, { SingleValue } from 'react-select';
import { CustomCategory, ICurrentFilters } from '../../../../types/types';
import { sortOptions } from '../../constants/constants';
import { getStartCategoryID } from '../../utils/utils';
import BrandsList from '../BrandsList';
import styles from './Sidebar.module.scss';

// eslint-disable-next-line max-lines-per-function
export function CatalogSidebar(props: {
  setcurrentFilters: React.Dispatch<
    React.SetStateAction<Partial<ICurrentFilters>>
  >;
  productCategories: CustomCategory[];
  brands: string[];
  categorySlug: string | undefined;
  subCategorySlug: string | undefined;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}): React.ReactElement {
  const {
    productCategories,
    brands,
    setcurrentFilters,
    categorySlug,
    subCategorySlug,
    setCurrentPage,
  } = props;
  const navigate = useNavigate();
  const [categoryFilterProps, setCategoryFilterProps] = useState('');
  const [trademarkProps, setTrademarkProps] = useState(['']);
  const [originFilterProps, setoriginFilterProps] = useState(['']);
  const [lowerPriceFilterProps, setLowerPriceFilterProps] = useState('');
  const [higherPriceFilterProps, setHigherPriceFilterProps] = useState('');
  const [sortProps, setSortProps] = useState('price asc');
  const [searchProps, setSearchProps] = useState('');
  const [currentSearchString, setCurrentSearchString] = useState('');
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(0);
  const [componentKey, setComponentKey] = useState(0);

  const handleNavigate = (path: string): void => {
    navigate(path);
  };

  useEffect(() => {
    setCategoryFilterProps(
      getStartCategoryID(productCategories, categorySlug, subCategorySlug),
    );
  }, [productCategories, categorySlug, subCategorySlug]);

  useEffect(() => {
    if (window.innerWidth < 678) {
      setWidth(window.innerWidth);
    }
  }, []);

  const handleFiltersClick = (
    categoryID: string,
    redirectPath: string,
  ): void => {
    setCurrentPage(1);
    setCategoryFilterProps(`${categoryID}`);
    handleNavigate(redirectPath);
  };

  const handleBrandsClick = (
    event: ChangeEvent<HTMLInputElement>,
    value: string,
  ): void => {
    if (event.target.checked) {
      setTrademarkProps([...trademarkProps, value]);
    } else {
      setTrademarkProps(trademarkProps.filter((filter) => filter !== value));
    }
    setCurrentPage(1);
  };

  const handleOriginChange = (
    event: ChangeEvent<HTMLInputElement>,
    value: string,
  ): void => {
    if (event.target.checked) {
      setoriginFilterProps([...originFilterProps, value]);
    } else {
      setoriginFilterProps(
        originFilterProps.filter((filter) => filter !== value),
      );
    }
    setCurrentPage(1);
  };

  const handleLowerPriceChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    const currentPrice = event.target.value;
    const regex = /[^0-9.,]/g;
    const currentPriceAsNumber = currentPrice.replace(',', '.');

    if (
      (!`${currentPrice}`.match(regex) && +currentPriceAsNumber) ||
      currentPriceAsNumber === '' ||
      currentPriceAsNumber === '0'
    ) {
      setLowerPriceFilterProps(currentPriceAsNumber.toString());
    }
    setCurrentPage(1);
  };

  const handleHigherPriceChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    const currentPrice = event.target.value;
    const regex = /[^0-9.,]/g;
    const currentPriceAsNumber = currentPrice.replace(',', '.');

    if (
      (!`${currentPrice}`.match(regex) && +currentPriceAsNumber) ||
      currentPriceAsNumber === '' ||
      currentPriceAsNumber === '0'
    ) {
      setHigherPriceFilterProps(currentPriceAsNumber.toString());
    }
    setCurrentPage(1);
  };

  const handleSortChange = (
    option: SingleValue<{ value: string; label: string }>,
  ): void => {
    setCurrentPage(1);
    setSortProps(option ? option.value : '');
  };

  const handleSearchInput = (searchValue: string): void => {
    setCurrentSearchString(searchValue);
  };

  const handleSearchClick = (): void => {
    setSearchProps(currentSearchString);
  };

  const getWindowSize = (): void => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', getWindowSize);
    if (width && width < 678) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
    return () => {
      window.removeEventListener('resize', getWindowSize);
    };
  }, [width]);

  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      setcurrentFilters({
        category: categoryFilterProps,
        trademark: trademarkProps,
        originFilter: originFilterProps,
        lowerPrice: lowerPriceFilterProps,
        higherPrice: higherPriceFilterProps,
        sort: sortProps,
        search: searchProps,
      });
    } else didMount.current = true;
  }, [
    setcurrentFilters,
    categoryFilterProps,
    trademarkProps,
    originFilterProps,
    lowerPriceFilterProps,
    higherPriceFilterProps,
    sortProps,
    searchProps,
  ]);

  const categories = productCategories.map((category) => (
    // <Link to={`/catalog/${category.slug}`} key={category.id}>
    <SubMenu
      active={
        window.location.pathname === `/catalog/${category.slug}` ||
        window.location.pathname === `/catalog/${category.slug}/`
      }
      key={category.key}
      label={category.name}
      onClick={(): void =>
        handleFiltersClick(category.id, `/catalog/${category.slug}`)
      }
    >
      {category.children.map((child) => (
        // <Link to={`/catalog/${category.slug}/${child.slug}`} key={child.id}>
        <MenuItem
          active={
            window.location.pathname ===
              `/catalog/${category.slug}/${child.slug}` ||
            window.location.pathname ===
              `/catalog/${category.slug}/${child.slug}/`
          }
          key={child.key}
          onClick={(): void =>
            handleFiltersClick(
              child.id,
              `/catalog/${category.slug}/${child.slug}`,
            )
          }
        >
          {child.name.replace('_', ' ')}
        </MenuItem>
        /* </Link> */
      ))}
    </SubMenu>
    // </Link>
  ));

  const handleResetFilters = (): void => {
    setTrademarkProps(['']);
    setoriginFilterProps(['']);
    setLowerPriceFilterProps('');
    setHigherPriceFilterProps('');
    setSortProps('');
    setSearchProps('');
    setCurrentSearchString('');
    setComponentKey(componentKey + 1);
    setCurrentPage(1);
  };

  return (
    <div key={componentKey} style={{ display: 'flex' }}>
      <Sidebar
        collapsed={collapsed}
        collapsedWidth="130px"
        className={styles.sidebar}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            overflow: 'visible',
          },
        }}
      >
        <Menu
          rootStyles={{
            [`.${menuClasses.button}`]: {
              ':hover': {
                backgroundColor: '#fdff8d',
              },
            },
            position: 'sticky',
            top: '1.5rem',
          }}
          menuItemStyles={{
            button: ({ level, active }): CSSObject | undefined => {
              if (level === 0)
                return {
                  backgroundColor: active ? '#64e44c' : undefined,
                };
              if (level === 1)
                return {
                  backgroundColor: active ? '#fdff8d' : undefined,
                };
              return undefined;
            },
          }}
        >
          <div className={styles.search}>
            <input
              className={styles.input}
              type="text"
              placeholder="search..."
              onChange={(e): void =>
                handleSearchInput(e.target.value.toLowerCase())
              }
            />
            <FiSearch
              className={styles.search_icon}
              onClick={(): void => handleSearchClick()}
            />
          </div>
          <Select
            options={sortOptions}
            defaultValue={sortOptions.find(({ value }) => value === sortProps)}
            isClearable
            placeholder="sort..."
            className={styles.sort}
            onChange={handleSortChange}
            styles={{
              control: (base, state) => ({
                ...base,
                boxShadow: 'none',
                borderColor: state.isFocused ? '#ededed' : '#ededed',
                '&:hover': {
                  borderColor: state.isFocused ? '#ededed' : '#ededed',
                },
                border: '1px solid #ededed',
                fontSize: '14px',
                height: '2rem',
                margin: '5px',
                padding: '0',
              }),
              option: (base, state) => ({
                ...base,
                borderColor: '#ededed',
                color: '#000',
                backgroundColor: state.isSelected ? '#fff' : '#fff',
                '&:hover': {
                  borderColor: state.isFocused ? '#ededed' : '#ededed',
                  color: '#000',
                  backgroundColor: '#fdff8d',
                },
              }),
            }}
          />

          {categories}
          <SubMenu label="Filters" defaultOpen>
            <ul className={styles.list}>
              <li className={styles.price}>
                <strong>Price: </strong>
                <span>from</span>
                <input
                  type="text"
                  placeholder="min"
                  onChange={(event): void => handleLowerPriceChange(event)}
                />
                <span>to</span>
                <input
                  type="text"
                  placeholder="max"
                  onChange={(event): void => handleHigherPriceChange(event)}
                />
              </li>
              <li className={styles.brand}>
                <BrandsList
                  brands={brands}
                  handleBrandsClick={handleBrandsClick}
                />
              </li>
              <li className={styles.brand}>
                <ul className={styles.origin_list}>
                  <strong>Origin</strong>
                  <li>
                    <input
                      type="checkbox"
                      onChange={(event): void =>
                        handleOriginChange(event, 'local')
                      }
                    />
                    <span className="text">Local</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      onChange={(event): void =>
                        handleOriginChange(event, 'foreign')
                      }
                    />
                    <span className="text">Foreign</span>
                  </li>
                </ul>
              </li>
            </ul>
          </SubMenu>
          <button
            type="button"
            className={styles.reset}
            onClick={handleResetFilters}
          >
            Reset Filters
          </button>
        </Menu>
      </Sidebar>
    </div>
  );
}
