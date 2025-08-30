import React, { createContext, useContext, useReducer } from "react";

interface Notification {
  id: string;
  title: string;
  message: string;
}

interface State {
  notifications: Notification[];
}

type Action =
  | { type: "ADD_NOTIFICATION"; payload: Notification }
  | { type: "DISMISS_NOTIFICATION"; payload: string };

const initialState: State = { notifications: [] };

const NotificationContext = createContext<{
  state: State;
  addNotification: (notif: Notification) => void;
  dismissNotification: (id: string) => void;
} | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return { notifications: [...state.notifications, action.payload] };
    case "DISMISS_NOTIFICATION":
      return {
        notifications: state.notifications.filter((n) => n.id !== action.payload),
      };
    default:
      return state;
  }
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNotification = (notif: Notification) => {
    dispatch({ type: "ADD_NOTIFICATION", payload: notif });
  };

  const dismissNotification = (id: string) => {
    dispatch({ type: "DISMISS_NOTIFICATION", payload: id });
  };

  return (
    <NotificationContext.Provider value={{ state, addNotification, dismissNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotifications must be used within NotificationProvider");
  }
  return context;
};
