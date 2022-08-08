import React from "react";
import { Icon, IconProps } from "../Icon";

export type FacebookCircleLineProps = Omit<IconProps, "name">;

export const FacebookCircleLine = (props: FacebookCircleLineProps) => (
  <Icon name="facebook-circle-line" {...props} />
);
