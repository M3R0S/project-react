import React, { FC } from "react";
import { useAppSelector } from "../../hook/useStore";
import ReviewsItem from './ReviewsItem'
import cl from '../../styles/reviews.module.css'

const ReviewsList: FC = () => {
  const { id, img, info, job, fullName } = useAppSelector((state) => state.reviews.list);
  return (
    <main className={cl.main}>
      <h1>Our Reviews</h1>
      <span className={cl.decoration}></span>
      <ReviewsItem
        key={id}
        id={id}
        img={img}
        fullName={fullName}
        job={job}
        info={info}
      />
    </main>
  );
};

export default ReviewsList;
