import styles from "@/app/components/dropdown/dropdown.module.css";
import { sortedByDropdownMenu } from "@/app/merchants/utils";
import { Merchant } from "@/app/types/merchants";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface DropdownProps {
  merchantsData: Merchant[];
  setMerchantsData: React.Dispatch<React.SetStateAction<Merchant[]>>;
  options: string[];
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

function Dropdown({
  merchantsData,
  setMerchantsData,
  options,
  selectedMenu,
  setSelectedMenu,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedMenu = (option: string) => {
    setSelectedMenu(option);
    setIsOpen(false);
    const sortedData = sortedByDropdownMenu(merchantsData, option);
    setMerchantsData(sortedData);
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
