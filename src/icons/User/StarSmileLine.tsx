import React from "react";
import { Icon, IconProps } from "../Icon";

export type StarSmileLineProps = Omit<IconProps, "name">;

export const StarSmileLine = (props: StarSmileLineProps) => (
  <Icon name="star-smile-line" {...props} />
);
