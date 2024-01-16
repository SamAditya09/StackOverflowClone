import React from "react";
import bookmark from "../images/bookmark-solid.svg";
import share from "../images/share.png";
import comment from "../images/comment.png";
import { useState, useEffect } from "react";
import "./card.css";

export const Card = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setValue(data.items);
        console.log(data.items[0].link);
        // setPhotos(data);
      });
  }, []);

  function timeAgo(timestamp) {
    const currentDate = new Date();
    const creationDate = new Date(timestamp * 1000);

    const timeDifference = currentDate - creationDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} ${years === 1 ? "year" : "years"} ago`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
      return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    }
  }

  return (
    <>
      {value.map((val) => (
        <div className="Maindiv col">
          <div className="container">
            <div className="card">
              <div className="nextbtn">
                <h5 className="card-header">{val.title}</h5>
                <table>
                  <tr>
                    <td>-</td>
                    <td>{val.owner.reputation}</td>
                    <td>+</td>
                  </tr>
                </table>
              </div>
              <div className="card-body">
                <div className="grid1">
                  <img
                    src={val.owner.profile_image}
                    alt="image"
                    id="profileImg"
                  />
                  <h5 className="card-title">{val.owner.display_name}</h5>
                  <button className="btn">{val.owner.reputation}</button>
                </div>
                <div className="grid2">
                  <h6>Active {timeAgo(val.creation_date)}</h6>
                  <h6>|</h6>
                  <h6>Active {timeAgo(val.last_activity_date)}</h6>
                  <h6>|</h6>
                  <h6> viewed {val.view_count}k</h6>
                </div>
              </div>
            </div>
            <div className="question">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                numquam amet dolores non iste quasi at sint earum corporis
                voluptatem?
              </p>
              <div className="section2">
                <div>
                  <h5>
                    <img src={bookmark} alt="Image" />
                    {val.answer_count}
                  </h5>
                </div>
                <div>
                  <img src={share} alt="Image2" srcset="" id="Image2" />
                  <img src={comment} alt="Image3" srcset="" id="Image3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
