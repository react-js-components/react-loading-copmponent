import React from "react";
import HashLoader from "react-spinners/HashLoader";

export const Loading = ({ ...props }) => {
  return (
    <div className="sweet-loading">
      <HashLoader
        color="#36d7b7"
        loading={props.loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
