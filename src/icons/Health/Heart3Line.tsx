import React from "react";
import { Icon, IconProps } from "../Icon";

export type Heart3LineProps = Omit<IconProps, "name">;

export const Heart3Line = (props: Heart3LineProps) => (
  <Icon name="heart-3-line" {...props} />
);
