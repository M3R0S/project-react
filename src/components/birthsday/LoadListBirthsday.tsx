import React, { FC } from "react";
import { useAppSelector } from "../../hook/useStore";
import ItemBirthsday from "./ItemBirthsday";
import { v4 as uuidv4 } from "uuid";
import cl from "../../styles/birthsday.module.css";

const LoadListBirthsday: FC = () => {

  const { list, loading } = useAppSelector((state) => state.birthsday);
  
  return (
    <div>
      {loading ? (
        <h1>Загрузка</h1>
      ) : (
        <>
          <h1 className={cl.title_birthsday}>{list.length} birthdays today</h1>
          <ul>
            {list.map(({img, years, fullName}) => (
              <ItemBirthsday
                key={uuidv4()}
                fullName={fullName}
                img={img}
                years={years}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default LoadListBirthsday;
