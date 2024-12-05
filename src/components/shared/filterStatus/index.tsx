import styles from "./filterStatus.module.css";

export const StatusFilters = () => {
  return (
    <div className={styles.filterStatus}>
      <h4>Status</h4>
      <label htmlFor="MembersOfTheUnitedNations">
        <input
          type="checkbox"
          id="MembersOfTheUnitedNations"
          name="MembersOfTheUnitedNations"
        />
        <p>Members of the United Nations</p>
      </label>
      <label htmlFor="Independent">
        <input type="checkbox" id="Independent" name="Independent" />
        <p>Independent</p>
      </label>
    </div>
  );
};
