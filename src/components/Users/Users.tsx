import { useEffect, useRef, useState } from "react";
import styles from "./Users.module.css";
import DetailsUser from "../DetailsUser/DetailsUser";

interface UserProps {
  name: string;
  phone: string;
  email: string;
  department: string;
  hire_date: string;
  position_name: string;
}

function Users({
  name,
  phone,
  email,
  department,
  hire_date,
  position_name,
}: UserProps) {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const popUpRef = useRef<HTMLDivElement | null>(null);
  const handleCardClick = () => {
    setShowPopUp(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popUpRef.current &&
        !popUpRef.current.contains(event.target as Node)
      ) {
        setShowPopUp(false);
      }
    };

    if (showPopUp) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopUp]);
  return (
    <div>
      <div className={styles.user} onClick={handleCardClick}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.contantWrapper}>
          <div className={styles.phoneContainer}>
            <img src="/public/phone.svg" alt="phone" />
            <p className={styles.phone}>{phone}</p>
          </div>
          <div className={styles.emailContainer}>
            <img src="/public/mail.svg" alt="email" />
            <p className={styles.email}>{email}</p>
          </div>
        </div>
      </div>
      {showPopUp && (
        <div className={styles.overlay}>
          <div ref={popUpRef}>
            <DetailsUser
              setShowPopUp={setShowPopUp}
              name={name}
              phone={phone}
              email={email}
              department={department}
              hire_date={hire_date}
              position_name={position_name}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
