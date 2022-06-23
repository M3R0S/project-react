import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/useStore";
// import { getAsBirthsday } from "../store/birthsdaySlice";
import cl from "../../styles/birthsday.module.css";
import ItemBirthsday from "./ItemBirthsday";
import { v4 as uuidv4 } from "uuid";
import { clearBirthsday, getBirthsday } from "../../store/birthsdaySlice";

const ListBirthsday: FC = () => {
  const { list, loading } = useAppSelector((state) => state.birthsday);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getAsBirthsday()); // запрос
    dispatch(getBirthsday()); // заглушка
  }, [dispatch]);
  return (
    <main className={cl.main}>
      <section className={cl.birthsday_container}>
        {loading ? (
          <h1>Загрузка</h1>
        ) : (
          <>
            <h1 className={cl.title_birthsday}>
              {list.length} birthdays today
            </h1>
            <ul>
              {list.map((i) => (
                <ItemBirthsday
                  key={uuidv4()}
                  fullName={i.fullName}
                  img={i.img}
                  years={i.years}
                />
              ))}
            </ul>
          </>
        )}
        <div className={cl.button_container}>
          <button
            onClick={() => dispatch(clearBirthsday())}
            className={cl.clear_birthsday}
          >
            Clear
          </button>
        </div>
      </section>
    </main>
  );
};

export default ListBirthsday;
