import { useState } from "react";
import { useRef } from "react";

const AccordionItem = ({ data }) => {

  const [clicked, setClicked] = useState(true);
  const contentEl = useRef();

  const { Name, Option } = data;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        {Name}
        <span className="control">{clicked ? "—" : "+"} </span>
      </button>

      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          clicked
            ? { height: contentEl?.current?.scrollHeight || "auto" }
            : { height: "0px" }
        }
      >
        <div className="answer">
        <div className="row">
                  {Option.map((i) => { 
                    return(
                        <div className="col-lg-3 col-md-4 p-1" key={i.id}>
                        <div className="card">
                      <div className="card-body row">
                        <div className="col-6">
                          <h6 className="card-title">{i.Name}</h6>
                        </div>
                        <div className="col-6">{i.Icon}</div>
                        <p className="card-text"> Total Policy - {i.TP}</p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {i.Claims} New claims
                          </small>
                        </p>
                      </div>
                    </div>
                    </div>
                  )})
                  }
              </div>
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
