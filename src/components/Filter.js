import React, {useRef} from 'react';
// import Checkbox component
import Checkbox from './Checkbox';
// import Accordion component
import Accordion, { AccordionHeader, AccordionBody } from "./Accordion";
// import icons from react-icons
import { BiCheck } from 'react-icons/bi'
import { GoSettings } from 'react-icons/go'
import { IoCloseSharp } from "react-icons/io5";
// import modules from react-input-range
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css"

import useFetchData from '../hooks/useFetchData';

const getUnique = (items, value) => {
  return [...new Set(items && items.map((item) => item[value]))];
};

const Filter = ({ 
  filterSelect, 
  filter, 
  price, 
  setPrice,
  maxPrice,
  minPrice
}) => {
  // const { data } = useFetchData("http://localhost:5000/products");
  const { data } = useFetchData(
    "https://api.npoint.io/402b2b47fdf3738c33c2/products"
  );

  // brands
  const brands = getUnique(data, "brand");
  // Girls Clothes
  let girlsProducts = data && data.filter((item) => item.category === "Girls")
  const girls = getUnique(girlsProducts, "type");
  // Men Clothes
  let menProducts = data && data.filter((item) => item.category === "Men")
  const men = getUnique(menProducts, "type");
  // Sizes
  const tempSize = getUnique(data, "size")
  let allSize = []
  tempSize.map((item) =>  allSize.push(...item))
  const size = [...new Set(allSize)]
  // Colors
  const tempColor = getUnique(data, "colors")
  let allColor = []
  tempColor.map((item) => allColor.push(...item))
  const colors = [...new Set(allColor)]
  
  
  const filterRef = useRef(null)
  const showHideFilter = () => filterRef.current.classList.toggle("active")

  return (
    <>
      <div className="filter__btn">
        <button onClick={() => showHideFilter()}>
          <span>Filter</span>
          <GoSettings />
        </button>
      </div>
      <div className="filter" ref={filterRef}>
        <div className="filter__close" onClick={() => showHideFilter()}>
          <IoCloseSharp />
        </div>
        <div className="filter__widget">
          <div className="filter__widget__title">
            <h4>Category</h4>
          </div>
          <div className="filter__widget__content">
            <div className="filter__widget__content__item">
              <Accordion>
                <AccordionHeader>Men</AccordionHeader>
                <AccordionBody>
                  {men.map((item, index) => (
                    <Checkbox
                      label={item}
                      key={index}
                      onChange={(e) =>
                        filterSelect("MEN_CATEGORY", e.checked, item)
                      }
                      checked={filter.menCategory.includes(item)}
                    />
                  ))}
                </AccordionBody>
              </Accordion>
            </div>
            <div className="filter__widget__content__item">
              <Accordion>
                <AccordionHeader>Girls</AccordionHeader>
                <AccordionBody>
                  {girls.map((item, index) => {
                    return (
                      <Checkbox
                        label={item}
                        key={index}
                        onChange={(e) =>
                          filterSelect("GIRLS_CATEGORY", e.checked, item)
                        }
                        checked={filter.girlsCategory.includes(item)}
                      />
                    );
                  })}
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="filter__widget">
          <div className="filter__widget__title">
            <h4>Price</h4>
          </div>
          <div className="filter__widget__content-price">
            <div className="filter__widget__content-price__item">
              <InputRange
                step={1}
                maxValue={maxPrice}
                minValue={minPrice}
                value={price.value}
                onChange={(value) => setPrice({ value })}
              />
            </div>
            <div className="filter__widget__content-price__item">
              <p>
                Price: <span>${price.value.min}</span> -{" "}
                <span>${price.value.max}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="filter__widget">
          <div className="filter__widget__title">
            <h4>Size</h4>
          </div>
          <div className="filter__widget__content-size">
            {size &&
              size.map((item, index) => (
                <div className="filter__widget__content-size__item" key={index}>
                  <label
                    className={`filter__widget__content-size__item ${
                      filter.size.includes(item) ? "active" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        filterSelect("SIZE", e.target.checked, item)
                      }
                      checked={filter.size.includes(item)}
                    />
                    {item}
                  </label>
                </div>
              ))}
          </div>
        </div>
        <div className="filter__widget">
          <div className="filter__widget__title">
            <h4>Color</h4>
          </div>
          <div className="filter__widget__content-color">
            {colors &&
              colors.map((item, index) => (
                <div
                  className="filter__widget__content-color__item "
                  key={index}
                >
                  <label
                    className={`filter__widget__content-color__item ${
                      filter.color.includes(item) ? "active" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        filterSelect("COLOR", e.target.checked, item)
                      }
                      checked={filter.color.includes(item)}
                    />
                    <div
                      className={`circle bg-${item} ${
                        filter.color.includes(item) ? "active" : ""
                      }`}
                    >
                      <BiCheck className="icon" />
                    </div>
                  </label>
                </div>
              ))}
          </div>
        </div>
        <div className="filter__widget">
          <div className="filter__widget__title">
            <h4>Brand</h4>
          </div>
          <div className="filter__widget__content">
            {brands &&
              brands.map((item, index) => (
                <div className="filter__widget__content__item" key={index}>
                  <Checkbox
                    label={item}
                    onChange={(e) => filterSelect("BRAND", e.checked, item)}
                    checked={filter.brand.includes(item)}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
