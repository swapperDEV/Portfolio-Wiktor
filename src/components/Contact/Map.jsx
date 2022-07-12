import React from "react";
import "./styles/map.css";
export const Map = () => {
  return (
    <>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            width="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Warszawa Marymont&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
};
