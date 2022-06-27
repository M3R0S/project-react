import React, { FC } from "react";

interface ReviewsProps {
  id: number;
  img: string;
  fullName: string;
  job: string;
  info: string;
}

const ReviewsItem: FC<ReviewsProps> = ({ id, img, fullName, job, info }) => {
  return (
    <section>
      <div>
        <img src={img} alt="Аватар" />
      </div>
      <div>
        <h2>{fullName}</h2>
        <h3>{job}</h3>
        <p>{info}</p>
      </div>
      <div>
        <button>
        </button>
        <button>
        </button>
        <div>
            <button>Surprise Me</button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsItem;
