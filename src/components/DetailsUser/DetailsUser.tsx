import styles from "./DetailsUser.module.css";

interface DetailsUserProps {
  name: string;
  phone: string;
  email: string;
  department: string;
  hire_date: string;
  position_name: string;
  setShowPopUp: (arg: boolean) => void;
}

function DetailsUser({
  name,
  phone,
  email,
  department,
  hire_date,
  position_name,
  setShowPopUp,
}: DetailsUserProps) {
  console.log(name, phone, email, department, hire_date, position_name);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{name}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          onClick={() => setShowPopUp(false)}
          style={{ cursor: "pointer" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z"
            fill="black"
          />
        </svg>
      </div>
      <div className={styles.info}>
        <div className={styles.infoContainer}>
          <div className={styles.infoKey}>Телефон:</div>
          <div className={styles.infoValue}>{phone}</div>
          <div className={styles.infoKey}>Почта:</div>
          <div className={styles.infoValue}>{email}</div>
          <div className={styles.infoKey}>Дата приема:</div>
          <div className={styles.infoValue}>{hire_date}</div>
          <div className={styles.infoKey}>Должность:</div>
          <div className={styles.infoValue}>{position_name}</div>
          <div className={styles.infoKey}>Подразделение:</div>
          <div className={styles.infoValue}>{department}</div>
        </div>
      </div>
      <div className={styles.additionalInformation}>
        <h3 className={styles.addInfo}>Дополнительная информация:</h3>
        <p className={styles.infoParaf}>
          Разработчики используют текст в качестве заполнителя макта страницы.
          Разработчики используют текст в качестве заполнителя макта страницы.
        </p>
      </div>
    </div>
  );
}

export default DetailsUser;
