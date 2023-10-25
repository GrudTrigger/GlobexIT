import styles from "./Search.module.css";

interface SearchProps {
  searchUser: string;
  handleUnput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search({ handleUnput, searchUser }: SearchProps) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        value={searchUser}
        onChange={(e) => handleUnput(e)}
      />
      <img src="/public/search.svg" alt="search" />
    </div>
  );
}

export default Search;
