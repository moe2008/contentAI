/* eslint-disable react/prop-types */

const SiteWrapper = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-gray-300 dark:bg-darkMode-bg overflow-hidden">
      {children}
    </div>
  );
};

export default SiteWrapper;
