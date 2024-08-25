import React from "react";
import Modal from "../Modal";
import { SettingsIcon } from "../icons";
import { Tab } from "../Tabs";

interface NotificationProps {
  isOpen: boolean;
}

const Notification: React.FC<NotificationProps> = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <div
        className={`w-full max-w-[342px] lg:max-w-[420px] mx-auto h-[460px] overflow-hidden overflow-y-auto p-4 rounded-lg bg-white mt-10`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-[20px] font-bold text-grey-bold">
            Notifications
          </h3>
          <span>
            <SettingsIcon />
          </span>
        </div>
        <div>
          <Tab>
            <Tab.TabList activeTab={0} onTabClick={() => {}}>
              <div>All</div>
              <div>Transactions</div>
              <div>Updated</div>
            </Tab.TabList>
            <Tab.TabContent activeTab={0}>
              <div>All</div>
              <div>Transactions</div>
              <div>Updated</div>
            </Tab.TabContent>
          </Tab>
        </div>
      </div>
    </Modal>
  );
};

export default Notification;
