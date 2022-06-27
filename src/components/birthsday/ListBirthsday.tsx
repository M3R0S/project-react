import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../../hook/useStore";
// import { getAsBirthsday } from "../store/birthsdaySlice";
import cl from "../../styles/birthsday.module.css";
import { clearBirthsday, getBirthsday } from "../../store/birthsdaySlice";
import LoadListBirthsday from "./LoadListBirthsday";

const ListBirthsday: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getAsBirthsday()); // запрос
    dispatch(getBirthsday()); // заглушка
  }, [dispatch]);
  return (
    <main className={cl.main}>
      <section className={cl.birthsday_container}>
        <LoadListBirthsday />
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
