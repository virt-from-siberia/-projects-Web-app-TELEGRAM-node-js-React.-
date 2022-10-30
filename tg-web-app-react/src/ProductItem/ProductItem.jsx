import React from 'react';
import './ProductItem.css'
import {Button} from "../components/Button/Button";


export const ProductItem = ({product, className, onAdd}) => {
  
  const onAddHandler = () =>
      onAdd(product)


  return (
      <div>
        <div className={'product ' + className}>
          <div className={'img'}/>
          <div className={'title'}>{product.title}</div>
          <div className={'description'}>{product.description}</div>
          <div className={'price'}>
            <span>Стоимось: <b>{product.price}</b></span>
          </div>
          <Button className={'add-btn'} onClick={onAddHandler}>Добавить вкорзину</Button>
        </div>
      </div>
  );
};


