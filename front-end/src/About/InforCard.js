import { LuLightbulb } from "react-icons/lu";
import { CiHome } from "react-icons/ci";
import { FaNapster } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa6";
import "./InforCard.css";

const InforCard = () => {
  return (
    <section id="about">
      <div className="container card__infor">
        <div className="item">
          <div className="layer">
            <h3>Title 1</h3>
            <p>
              StackS Verified is our own designation and means that we inspect
              every item, every time.
            </p>
            <span>
              <LuLightbulb />
            </span>
          </div>
          <h4>Trang 1</h4>
        </div>

        <div className="item">
          <div className="layer">
            <h3>Title 2 </h3>
            <p>
              StackS Verified is our own designation and means that we inspect
              every item, every time.
            </p>
            <span>
              <FaNapster />
            </span>
          </div>
          <h4>Trang 2</h4>
        </div>

        <div className="item">
          <div className="layer">
            <h3>Title 3</h3>
            <p>
              StackS Verified is our own designation and means that we inspect
              every item, every time.
            </p>
            <span>
              <CiHome />
            </span>
          </div>
          <h4>Trang 3</h4>
        </div>

        <div className="item">
          <div className="layer">
            <h3>Title 4</h3>
            <p>
              StackS Verified is our own designation and means that we inspect
              every item, every time.
            </p>
            <span>
              <FaRegPaperPlane />
            </span>
          </div>
          <h4>Trang 4</h4>
        </div>
      </div>
    </section>
  );
};

export default InforCard;
