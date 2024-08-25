import { useRef, useState } from "react";
import { useClickAway } from "react-use";

type Action = {
  label: string;
  onClick: () => void;
};

type MoreActionsButtonProps = {
  actions: Action[];
};

const MoreActionsButton: React.FC<MoreActionsButtonProps> = ({ actions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  const toggleDialog = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative" ref={ref}>
      <button onClick={toggleDialog} className="text-greyPrimary text-[40px]">
        ...
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                action.onClick();
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoreActionsButton;
