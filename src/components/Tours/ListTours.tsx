import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/useStore";
import { getToursList } from "../../store/toursSlice";
import ItemTours from "./ItemTours";
import cl from "../../styles/tours.module.css";

const ListTours: FC = () => {
  const { list } = useAppSelector((state) => state.tours);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getToursList());
  }, [dispatch]);

  return (
    <main className={cl.main}>
      <section className={cl.section}>
        <h1>{list.length ? "Our Tours" : "No Tours Left"}</h1>
        {list.length ? (
          <span className={cl.decoration}></span>
        ) : (
          <button
            onClick={() => dispatch(getToursList())}
            className={cl.refresh}
          >
            Refresh
          </button>
        )}
        {list.map(({id, img, title, price, fullBody}) => (
          <ItemTours
            key={id}
            id={id}
            title={title}
            fullBody={fullBody}
            price={price}
            img={img}
          />
        ))}
      </section>
    </main>
  );
};

export default ListTours;
