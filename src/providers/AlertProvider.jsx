import { createContext, useContext, useState } from "react";

// Create a context for managing alerts
const AlertContext = createContext({});

// Define a provider component for the AlertContext
const AlertProvider = ({ children }) => {
  // State to manage the current alert message
  const [alert, setAlert] = useState(null);

  // Function to display an alert message and clear it after a certain time
  const showMessage = (msg) => {
    setAlert(msg);

    // Clear the alert after a certain time (2000 milliseconds in this case)
    setTimeout(() => {
      setAlert(null);
    }, 1000); // You can adjust the time (in milliseconds) as needed
  };

  // Data to be provided to the context consumers
  const dataToSend = { showMessage };

  return (
    <AlertContext.Provider value={dataToSend}>
      {/* Display the alert message if it exists */}
      {alert && (
        <div
          tabIndex="0"
          className="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-start justify-center"
        >
          <div
            className=" mt-[10rem] p-4  text-sm text-white rounded-lg bg-green-400 drop-shadow-2xl"
            role="alert"
          >
            {alert}
          </div>
        </div>
      )}
      {/* Render the children components */}
      {children}
    </AlertContext.Provider>
  );
};

// Export the AlertProvider as the default export
export default AlertProvider;

// Custom hook to easily access the AlertContext in functional components
export const useAlertContext = () => {
  return useContext(AlertContext);
};
