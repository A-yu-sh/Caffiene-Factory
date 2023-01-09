import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CoffeeContext } from "../../App";
import { Link } from "react-router-dom";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const ToggleAccordion = () => {
  const ToggleItems = useContext(CoffeeContext);
  const { id, Name } = useParams();
  const { name, category } = useParams();
  const [toggleDesc, SetToggleDesc] = useState(false);
  const [toggleData, SetToggleData] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-2 border-2 border-b-0 border-l-0 border-r-0 p-2">
        <div className="text-xl font-Nunito">Who Are We</div>
        <div>
          <button
            onClick={() => {
              SetToggleData(!toggleData);
            }}
            className="ml-[460px]"
          >
            {toggleData ? (
              <div>
                <MdKeyboardArrowUp />
              </div>
            ) : (
              <div>
                <MdKeyboardArrowDown />
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="border-2 border-t-0 border-l-0 border-r-0">
        {toggleData ? (
          <div className="mt-5">
            We are a team of passionate coffee enthusiasts who are dedicated to
            bringing our customers the best possible coffee experience. Our
            coffee beans are carefully sourced from the finest coffee-growing
            regions around the world and are roasted to perfection in small
            batches to ensure maximum flavor and freshness. Whether you're a
            coffee connoisseur or just a fan of a good cup of joe, we have
            something for everyone. We invite you to come and visit us at our
            cozy cafe and discover the perfect coffee blend for you
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className=" mt-2 grid grid-cols-2 border-2 border-b-0 border-l-0 border-r-0 p-2">
        <div className="text-xl font-Nunito">Our Shipping Policy</div>
        <div>
          <button
            onClick={() => {
              SetToggleDesc(!toggleDesc);
            }}
            className="ml-[460px]"
          >
            {toggleDesc ? (
              <div>
                <MdKeyboardArrowUp />
              </div>
            ) : (
              <div>
                <MdKeyboardArrowDown />
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="border-2 border-t-0 border-l-0 border-r-0">
        {toggleDesc ? (
          <div className="mt-5">
            Delivery Options : We offer a variety of delivery options to meet
            your needs. These options may vary depending on your location and
            the size and weight of your order. You will be able to view
            available delivery options during the checkout process.
            <br />
            <br />
            Delivery Time : Delivery times are estimates and begin from the date
            of shipping, rather than the date of order. Delivery times are to be
            used as a guide only and are subject to the acceptance and approval
            of your order.
            <br />
            <br />
            Delivery Costs : Delivery costs are calculated based on the weight
            and size of your order and your delivery location. You will be able
            to view the applicable delivery costs during the checkout process
            before you confirm your order.
            <br />
            <br />
            Damaged or Incorrect Orders : If you receive an order that is
            damaged or incorrect, please contact us immediately so that we can
            resolve the issue.
            <br />
            <br />
            Returns : If you are not satisfied with your order, please contact
            us within 14 days of receiving your order to request a return or
            exchange. All returns must be in their original packaging and in the
            same condition as received.
            <br />
            <br />
            Cancellations : You may cancel your order at any time before it has
            been shipped. If your order has already been shipped, you will need
            to follow our returns process.
            <br />
            <br />
            Changes to Delivery Policy : We reserve the right to make changes to
            our delivery policy at any time. Any changes will be posted on this
            page and will become effective immediately. It is your
            responsibility to check this page regularly for updates.
            <br />
            <br />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ToggleAccordion;
