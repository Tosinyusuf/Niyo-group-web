import React from "react";
import { Icon } from "@iconify/react";
import { IconProps } from "types/index";


const IconSet = ({ set, name, ...props }: IconProps) => {
  const renderIcon = () => {
    switch (set) {
      case "icon":
        if (name) {
          return (
            <Icon
              
              icon={name}
              className={props.className}
              color={props.color}
              style={{
                fontSize: props.size && props.size, ...props.style
              }}

            />
          );
        }
      case "svg":
        if (props.icon) {
          return <props.icon className={props.className} />;
        }
      case "vuesax":
        if (props.icon) {
          return (
            <props.icon
              variant={props.variant}
              color={props.color}
              size={props.size}
              
            />
          );
        }
      default:
        return <props.icon className={props.className} />;
    }
  };

  return renderIcon();
};

export default IconSet;
