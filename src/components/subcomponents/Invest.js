import { React, useState } from "react";
import searchImg from "./../utils/search-image.png";

const Invest = ({ cardlist, bell, mail, search }) => {
  const [hidden, sethidden] = useState(true);

  const selected = (id) => {
    document.getElementById(id).style.backgroundColor = "#18A62B";
    document.getElementById(id).style.color = "#fff";
  };

  return (
    <>
      <div className="invest d-flex flex-row gap-2">
        {hidden ? (
          <div
            id="alert"
            class=" align-items-center text-bg-primary border rounded flex-fill"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class="d-flex">
              <div class="body px-3 my-auto gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-2 gold"
                  width="14px"
                  height="14px"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z"
                  />
                </svg>
                Complete your KYC process
              </div>
              <div className="ms-auto me-0 my-auto">
                <div className="btn rounded-pill btn-sm gold gold-border">
                  Complete KYC
                </div>
                <button
                  type="button"
                  onClick={() => sethidden(false)}
                  class="btn  me-2 ms-2 gold"
                >
                  x
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="me-0 ms-auto d-flex">
          <button className="btn btn-primary rounded-pill align-items-center mx-4 px-4">
            Raise Capital
          </button>
        </div>

        <img src={bell} className="mx-2" alt="" />
        <img src={mail} className="mx-2" alt="" />
      </div>

      <div className="invest mt-4">
        <h1>Invest Now</h1>
        <p>
          venture buddy offers a variety of investment
          <br /> opportunities.
        </p>
        <div className="bg-light d-flex p-3 rounded mt-4 col-10">
          <div className="position-relative w-25 m-2">
            <img src={searchImg} id="searchIcon" alt="" className="img-fluid" />
            <input
              type="text"
              className="input text-center form-control w-100 border-0"
              id="searchField"
              width="20px"
              placeholder="Search for interest startups"
              onChange={search}
            />
          </div>

          <select
            class="rounded-pill m-2"
            id="selected"
            aria-label=".form-select example"
            onChange={() => selected("selected")}
          >
            <option selected>Sector</option>
            <option value="Arts & Entertainment">Arts & Entertainment</option>
            <option value="Edtech">Edtech</option>
            <option value="Fintech">Fintech</option>
            <option value="Food & Drinks">Food & Drinks</option>
            <option value="Health & wellness">Health & wellness</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Real estate">Real estate</option>
            <option value="Transpotation">Transpotation</option>
            <option value="Travel & Hospitality">Travel & Hospitality</option>
          </select>

          <select
            class="rounded-pill m-2"
            id="techSelected"
            aria-label=".form-select example"
            onChange={() => selected("techSelected")}
          >
            <option selected>Tech</option>
            <option value="Arts & Entertainment">Arts & Entertainment</option>
            <option value="Edtech">Edtech</option>
            <option value="Fintech">Fintech</option>
            <option value="Food & Drinks">Food & Drinks</option>
            <option value="Health & wellness">Health & wellness</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Real estate">Real estate</option>
            <option value="Transpotation">Transpotation</option>
            <option value="Travel & Hospitality">Travel & Hospitality</option>
          </select>

          <select
            class="rounded-pill m-2"
            id="revenueSelected"
            aria-label=".form-select example"
            onChange={() => selected("revenueSelected")}
          >
            <option selected>Revenue</option>
            <option value="Arts & Entertainment">Arts & Entertainment</option>
            <option value="Edtech">Edtech</option>
            <option value="Fintech">Fintech</option>
            <option value="Food & Drinks">Food & Drinks</option>
            <option value="Health & wellness">Health & wellness</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Real estate">Real estate</option>
            <option value="Transpotation">Transpotation</option>
            <option value="Travel & Hospitality">Travel & Hospitality</option>
          </select>
        </div>

        <h1 className="mt-4">Live Deals</h1>
        <p>130 opportunities</p>

        <div className="container row">
          {cardlist.map((card, i) => (
            <div className="col-4">
              <div class="card my-3">
                <img src={card.image} class="card-img-top" alt="..." />
                <div class="card-body mt-4 position-relative">
                  <img src={card.profile} alt="" className="rounded-image" />
                  <h5 class="card-title">{card.title}</h5>
                  <p class="card-text">{card.content}</p>
                  <div className="d-flex flex-row mt-5 gap-2">
                    <a href="#" class="btn btn-custom mt-4">
                      {card.btn1}
                    </a>
                    <a href="#" class="btn btn-custom mt-4">
                      {card.btn2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Invest;
