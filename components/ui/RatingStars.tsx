import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

type RatingStarsProps = {
    rating: number;
}

 export const RatingStars = ({rating}: RatingStarsProps) => {
      const full = Math.floor(rating);
      const half = rating % 1 !== 0;
      const empty = 5 - full - (half ? 1 : 0);

      return (
          <>
           {[...Array(full)].map((_, i) =>  <FaStar key={`full-${i}`} className="text-yellow-400" />)}
           {half && <FaRegStarHalfStroke  className="text-yellow-400" />}
            {[...Array(empty)].map((_, i) =>  <FaRegStar key={`empty-${i}`} className="text-yellow-400" />)}
          </>
      );
}


