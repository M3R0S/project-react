import React, { FC } from "react";
import { useAppDispatch } from "../../hook/useStore";
import { randomCard } from "../../store/reviewsSlice";
import cl from "../../styles/reviews.module.css";
import ArrowBox from "./ArrowBox";
import QuoteMark from "./QuoteMark";

interface ReviewsProps {
  id: number;
  img: string;
  fullName: string;
  job: string;
  info: string;
}

const ReviewsItem: FC<ReviewsProps> = ({ id, img, fullName, job, info }) => {

  const dispatch = useAppDispatch()

  return (
    <section className={cl.container}>
      <div className={cl.imageBox}>
        <div className={cl.backgroundImageBlue}></div>
        <img src={img} alt="Аватар" />
        <QuoteMark/>
      </div>
      <div className={cl.infoBox}>
        <h2>{fullName}</h2>
        <h3>{job}</h3>
        <p>{info}</p>
      </div>
      <ArrowBox id={id}/>
      <button onClick={() => dispatch(randomCard())} className={cl.surprise}>Surprise Me</button>
    </section>
  );
};

export default ReviewsItem;
