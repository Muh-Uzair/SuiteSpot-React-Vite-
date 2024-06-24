import { useNavigate, useParams } from "react-router-dom";
import styles from "../HotelsPG2/BookingWindowCMP.module.css";
import { useContext, useEffect, useState } from "react";
import { HotelsPGContext } from "../../Pages/HotelsPG2";

export default function BookingWindowCMP() {
  const navigate = useNavigate();
  const { dispatch, cardNo, pin } = useContext(HotelsPGContext);
  const [validUser, setValidUser] = useState("initial");
  const { cityName } = useParams();

  function checkUserExistence(usersArr) {
    // console.log(usersArr);
    let trueUser = false;
    usersArr.forEach((val) => {
      if (val.debit_card_number === cardNo && val.pin === pin) {
        trueUser = true;
      }
    });

    return trueUser;
  }

  async function checkValidityUser() {
    try {
      const res = await fetch(`http://localhost:9000/users`);
      const data = await res.json();
      if (checkUserExistence(data)) {
        setValidUser("validUser");
      } else {
        setValidUser("notValidUser");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleBookClick() {
    // console.log(`book clicked`);
    checkValidityUser();
    // console.log(validUser);
  }

  useEffect(() => {
    function navigateValidNotValid() {
      if (validUser === "validUser") {
        navigate(`/hotels/${cityName}/validUser`);
      } else if (validUser === "notValidUser") {
        navigate(`/hotels/${cityName}/notValidUser`);
      }
    }
    if (validUser !== "initial") navigateValidNotValid();
  }, [validUser]);

  return (
    <div className={styles.divMainBox}>
      <button className={styles.buttonBack} onClick={() => navigate(-1)}>
        <img src="/assets/HotelsPG/chevron-left.png" />
        Back
      </button>

      <div className={styles.divCreditCardPin}>
        <input
          type="number"
          placeholder="Enter credit/debit card number"
          onChange={(e) =>
            dispatch({ type: "cardNoChanged", payload: e.target.value })
          }
          value={cardNo}
        />
        <input
          type="number"
          placeholder="Enter your pin"
          onChange={(e) =>
            dispatch({ type: "pinChanged", payload: e.target.value })
          }
          value={pin}
        />
      </div>

      <button className={styles.buttonBook} onClick={() => handleBookClick()}>
        Book
      </button>
    </div>
  );
}
