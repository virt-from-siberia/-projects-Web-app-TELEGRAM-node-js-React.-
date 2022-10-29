import React, {useEffect} from 'react';
import {Button} from "../Button/Button";


export const Header = () => {
  useEffect(() => {
    tg.ready()
  }, []);

  const tg = window.Telegram.WebApp
  const onClose = () =>
      tg.close()

  return (
      <div className={'header'}>
        <Button onClick={onClose}>Закрыть</Button>
        <span>{tg.initDataUnsafe?.user?.username}</span>
      </div>
  );
};

