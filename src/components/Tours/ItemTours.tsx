import React, { FC, useState } from "react";
import { useAppDispatch } from "../../hook/useStore";
import { deleteToursItem } from "../../store/toursSlice";
import cl from "../../styles/tours.module.css";

interface ToursList {
  id: number;
  img: string;
  title: string;
  shortBody: string;
  fullBody: string;
  price: string;
}

const ItemTours: FC<ToursList> = ({
  id,
  title,
  shortBody,
  fullBody,
  price,
  img,
}) => {

  const [state, setState] = useState<boolean>(false);
  const dispatch = useAppDispatch()

  return (
    <div className={cl.item_tours}>
      <img src={img} alt="Картинка" />
      <div className={cl.price_line}>
        <h2>{title}</h2>
        <strong>{price}</strong>
      </div>
      <p>
        <span>{state ? fullBody : shortBody}</span>
        <button
          onClick={() => {
            setState(!state);
          }}
        >
          {state ? "Show Less" : "Read More"}
        </button>
      </p>
      <button onClick={() => dispatch(deleteToursItem(id))} className={cl.delete}>
        Not interested
      </button>
    </div>
  );
};

export default ItemTours;
