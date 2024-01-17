import React from "react";
import bookmark from "../images/bookmark-solid.svg";
import share from "../images/share.png";
import comment from "../images/comment.png";
import { useState, useEffect } from "react";
import "./card.css";
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

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
        <div className="questions-section">
          <div className="questions-container">
            <div className="questions-heading">
              <div className="question-title">
                <h3> {val.title} </h3>
                <div className="numbers">
                  <div className="number">
                    <p id="minus">
                      {" "}
                      <FaMinus />{" "}
                    </p>
                    <p id="num"> {val.owner.reputation} </p>
                    <p id="plus">
                      {" "}
                      <FiPlus />{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="question-author-details">
                <div className="author-desc">
                  <img src={val.owner.profile_image} alt="authorImg" />
                  <p>{val.owner.display_name}</p>
                  <div>
                    <p> {val.owner.reputation} </p>
                  </div>
                </div>
                <div className="question-asked-time">
                  <p> Asked {timeAgo(val.creation_date)}</p>
                  <span className="div-line"> </span>
                  <p> Active {timeAgo(val.last_activity_date)} </p>
                  <span className="div-line"> </span>
                  <p> Viewed {val.view_count}k times </p>
                </div>
              </div>
            </div>

            <div className="questions-description">
              <p>
                {" "}
                Inside of visual studio code, I'm trying to execute a script.bat
                from the command line, but I'm getting the following error.{" "}
              </p>
              <div className="compiler">
                <div>
                  {" "}
                  <p>
                    {" "}
                    File C:\Theses_Repo\train-cnn\environment\Scripts\
                    activate.psl cannot be loaded because running scripts is
                    disabled on this system.{" "}
                  </p>{" "}
                </div>
              </div>
              <p>
                {" "}
                After reading <a href="/"> this</a> I tried to run the visual
                studio code in administrator mode, thinking that the problem was
                a matter of privileges. But the error is throwing anyway.{" "}
              </p>
            </div>

            <div className="question-footer">
              <div className="save-ques">
                <img src={bookmark} alt="saveImg" />
                <p> {val.answer_count} </p>
              </div>
              <div className="share-comment">
                <img src={share} alt="shareImg" />
                <img src={comment} alt="commentImg" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
