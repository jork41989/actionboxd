
  import { Helmet } from "react-helmet";
  import React from "react";
  const Seo = () => {
    return (
      <Helmet
        meta={[
          { property: "og:image", content: "https://i.imgur.com/ClB3G0d.png" },
          {
            property: "og:description",
            content:
              "A MernStack single-page social media app that allows users to rate, review and mark films as watched.",
          },
        ]}
      />
    );
  };



export default Seo;