import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/useStore";
import { getToursList } from "../../store/toursSlice";
import ItemTours from "./ItemTours";
import cl from '../../styles/tours.module.css'

const ListTours: FC = () => {
  const { list } = useAppSelector((state) => state.tours);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getToursList());
  }, [dispatch]);

  return (
    <main className={cl.main}>
      <section className={cl.section}>
        <h1>{list.length ? 'Our Tours' : 'No Tours Left'}</h1>
        {list.length ? <span className={cl.decoration}></span> : <button onClick={() => dispatch(getToursList()) } className={cl.refresh}>Refresh</button>}
          {list.map((i) => (
            <ItemTours
              key={i.id}
              id={i.id}
              title={i.title}
              shortBody={i.shortBody}
              fullBody={i.fullBody}
              price={i.price}
              img={i.img}
            />
          ))}
      </section>
    </main>
  );
};

export default ListTours;
