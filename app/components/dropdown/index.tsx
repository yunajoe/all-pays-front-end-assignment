import styles from "@/app/components/dropdown/dropdown.module.css";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface DropdownProps {
  options: string[];
}

function Dropdown({ options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedMenu = (option: string) => {
    setSelectedMenu(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropdownWrapper}>
        <button onClick={handleClick} className={styles.button}>
          {selectedMenu !== "" ? selectedMenu : "선택하기"}
        </button>
        <ChevronDown
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
        />
        {isOpen && (
          <div className={styles.menuContainer}>
            {options.map((option, index) => {
              return (
                <button
                  className={styles.button}
                  key={index}
                  onClick={() => handleSelectedMenu(option)}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
