import React, {useState} from 'react';
import {ProductItem} from "../ProductItem/ProductItem";
import {useTelegram} from "../hooks/useTelegram";
import './ProductList.css'


const products = [
  {
    title: 'Джинсы', price: 500, description: 'Серого цвета', id: 1
  },
  {
    title: 'Куртка', price: 5000, description: 'Синего цвета', id: 2
  }, {
    title: 'Часы', price: 2400, description: 'Неоновые', id: 2
  },
]

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return acc += item.price
  }, 0)
}

export const ProductList = () => {
  const [addedItems, setAddedItems] = useState()
  const {tg} = useTelegram()


  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id)
    let newItems = []

    if (alreadyAdded)
      newItems = addedItems.filter(item => item.id !== product.id)
    else
      newItems = [...addedItems, product]

    setAddedItems(newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`
      })
    }

  }


  return (<div>
    {products.map((item, index) => {
      return (<ProductItem
          key={index}
          product={item}
          onAdd={onAdd}
          className={'item'}
      />)
    })}
  </div>);
}

