import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";


export const Form = () => {
  const [formData, setFormData] = useState({
    country: "",
    street: "",
    subject: 'physical'
  })
  const {tg} = useTelegram()

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    })
  }, []);

  useEffect(() => {
    if (!formData.street || !formData.country)
      tg.MainButton.hide()
    else
      tg.MainButton.show()
  }, [formData]);


  return (
      <div className={'form'}>
        <h3>Введите ваши данные</h3>
        <input className={'input'} type="text" placeholder={'Страна'} value={formData.country} onChange={(e) => {
          setFormData({
            ...formData,
            country: e.target.value
          })
        }}/>
        <input className={'input'} type="text" placeholder={'Улица'} value={formData.street} onChange={(e) => {
          setFormData({
            ...formData,
            street: e.target.value
          })
        }}/>
        <select className={'select'} value={formData.subject} onChange={(e) => {
          setFormData({
            ...formData,
            subject: e.target.value
          })
        }}>
          <option value={'physical'}>Физ. лицо</option>
          <option value={'legal'}>Юр. лицо</option>
        </select>
      </div>
  );
};



