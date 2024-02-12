import React from "react";

function Accordion() {
  const CardData = [
    {
      id: 1,
      Name: "MOTOR1",
      Icon: <i className="lni lni-cog fs-3"></i>,
      TP: 25,
      Claims: 2,
    },
    {
      id: 2,
      Name: "MOTOR2",
      Icon: <i className="lni lni-cog fs-3"></i>,
      TP: 25,
      Claims: 2,
    },
    {
      id: 3,
      Name: "MOTOR3",
      Icon: <i className="lni lni-cog fs-3"></i>,
      TP: 25,
      Claims: 2,
    },
    {
      id: 4,
      Name: "MOTOR4",
      Icon: <i className="lni lni-cog fs-3"></i>,
      TP: 25,
      Claims: 2,
    },
  ];

  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Our Product & Service
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="row">
                  {CardData.map((i) => { 
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
        </div>
      </div>
    </>
  );
}

export default Accordion;
