import React from "react";
import { Icon, IconProps } from "../Icon";

export type StarSmileFillProps = Omit<IconProps, "name">;

export const StarSmileFill = (props: StarSmileFillProps) => (
  <Icon name="star-smile-fill" {...props} />
);
