import React from "react";
import { useNotifications } from "../context/NotificationContext";

const NotificationCenter: React.FC = () => {
  const { state, dismissNotification } = useNotifications();

  return (
    <div>
      <h2>Notification Center</h2>
      <ul>
        {state.notifications.map((notif) => (
          <li key={notif.id}>
            <strong>{notif.title}</strong>: {notif.message}
            <button onClick={() => dismissNotification(notif.id)}>Dismiss</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenter;
