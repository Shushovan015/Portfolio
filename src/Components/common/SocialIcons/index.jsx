import React from "react";
import { data } from "../../../Constants/jsonData";

const SocialIcons = () => {
  const socialItems = data.filter((items) => items.name === "social icons")[0];
  return (
    <ul className="is-flex is-align-center is-center is-gap-10 mt-15 social-icons">
      {socialItems.icons.map((items) => (
        <li>
          <a
            href={items.iconUrl}
            className="is-square is-square_xs"
            target="_blank"
          >
            {items.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
