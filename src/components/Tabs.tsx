import React, {
  useState,
  HTMLAttributes,
  ReactNode,
  Children,
  cloneElement,
  isValidElement,
} from "react";

type TabProps<T = undefined> = {
  children?: ReactNode;
} & HTMLAttributes<T>;

type TabComponentProps = {
  activeTab: number;
  onTabClick: (index: number) => void;
};

type TabListProps = TabProps & TabComponentProps;
type TabContentProps = TabProps & Pick<TabComponentProps, "activeTab">;

export const Tab = ({ children }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // Pass activeTab and onTabClick props only to components that need them
          if (child.type === TabList || child.type === TabContent) {
            return cloneElement(child, {
              activeTab,
              onTabClick: handleTabClick,
            } as TabComponentProps);
          }
        }
        return child;
      })}
    </>
  );
};

const TabList = ({ children, activeTab, onTabClick }: TabListProps) => {
  return (
    <div className="flex">
      {Children.map(children, (child, index) => (
        <div
          key={index}
          className={`cursor-pointer px-4 py-2 ${
            activeTab === index ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => onTabClick(index)}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

const TabContent = ({ children, activeTab }: TabContentProps) => {
  return (
    <div>
      {Children.map(children, (child, index) => {
        if (activeTab === index) {
          return <div key={index}>{child}</div>;
        }
        return null;
      })}
    </div>
  );
};

Tab.TabList = TabList;
Tab.TabContent = TabContent;

export default Tab;
