import React from "react";
import bookmark from "../images/bookmark-solid.svg"
import share from "../images/share.png"
import comment from "../images/comment.png"
import "./card.css";

export const Card = () => {
  return (
    <>
      <div className="Maindiv row">
        <div className="card">
          <h5 className="card-header">Title</h5>
          <div className="card-body">
            <img src="" alt="image" srcset="" />
            <h5 className="card-title">User</h5>
            <button>value</button>
            <h6>creation date</h6>
            <h6>last activity date</h6>
            <h6>view count</h6>
          </div>
        </div>
        <div className="question">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam amet dolores non iste quasi at sint earum corporis voluptatem?</p>
            <div className="section2">
                <div><h5><img src={bookmark} alt="Image"/>answerC</h5></div>
                <div>
                    <img src={share} alt="Image2" srcset="" id="Image2"/>
                    <img src={comment} alt="Image3" srcset="" id="Image3"/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
