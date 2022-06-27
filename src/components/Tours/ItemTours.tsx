import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/useStore";
import { deleteToursItem, setActiveFullBody } from "../../store/toursSlice";
import cl from "../../styles/tours.module.css";

interface ToursList {
  id: number;
  img: string;
  title: string;
  fullBody: string;
  price: string;
}

const ItemTours: FC<ToursList> = ({
  id,
  title,
  fullBody,
  price,
  img,
}) => {

  const dispatch = useAppDispatch()
  const { activeFullBody } = useAppSelector((state) => state.tours);

  return (
    <div className={cl.item_tours}>
      <img src={img} alt="Картинка" />
      <div className={cl.price_line}>
        <h2>{title}</h2>
        <strong>{price}</strong>
      </div>
      <p>
        <span>{activeFullBody ? fullBody : fullBody.substring(0, 200) + '...'}</span>
        <button onClick={() => {
          dispatch(setActiveFullBody());
        }}>
          {activeFullBody ? "Show Less" : "Read More"}
        </button>
      </p>
      <button
        onClick={() => dispatch(deleteToursItem(id))}
        className={cl.delete}
      >
        Not interested
      </button>
    </div>
  );
};

export default ItemTours;
