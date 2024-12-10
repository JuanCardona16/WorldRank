import { FormEvent } from "react";
import styles from "./filterStatus.module.css";
import { useStore } from "../../../config";

export const StatusFilters: React.FC = () => {
  const { Status, setStatus } = useStore()

  const handleSetStatus = (event: FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.name)

    if (event.currentTarget.name === "MembersOfTheUnitedNations") {
      setStatus({
        MembersOfTheUnitedNations: !Status.MembersOfTheUnitedNations,
        Independent: Status.Independent
      })
    } else if (event.currentTarget.name === "Independent") {
      setStatus({
        MembersOfTheUnitedNations: Status.MembersOfTheUnitedNations,
        Independent: !Status.Independent
      })
    }
  };

  return (
    <div className={styles.filterStatus}>
      <h4>Status</h4>
      <label htmlFor="MembersOfTheUnitedNations">
        <input
          type="checkbox"
          id="MembersOfTheUnitedNations"
          name="MembersOfTheUnitedNations"
          onClick={handleSetStatus}
        />
        <p>Members of the United Nations</p>
      </label>

      <label htmlFor="Independent">
        <input
          type="checkbox"
          id="Independent"
          name="Independent"
          onClick={handleSetStatus}
        />
        <p>Independent</p>
      </label>
    </div>
  );
};
