import React, { FC } from 'react'
import cl from '../../styles/birthsday.module.css';

interface ListBirthsday {
  img: string;
  fullName: string;
  years: string;
}

const ItemBirthsday: FC<ListBirthsday> = ({fullName, img, years}) => {
  return <li>
    <img className={cl.img_avatar} src={img} alt="Аватар" />
    <div className={cl.info_birthsday}>
      <h1>{fullName}</h1>
      <h2>{years}</h2>
    </div>
  </li>;
};

export default ItemBirthsday