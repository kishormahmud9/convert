const PillButton = ({ children }) => {
  return (
    <button className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
      {children}
    </button>
  );
};

export default PillButton;
