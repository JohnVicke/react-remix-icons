import React from "react";
import { Icon, IconProps } from "../Icon";

export type Heart2FillProps = Omit<IconProps, "name">;

export const Heart2Fill = (props: Heart2FillProps) => (
  <Icon name="heart-2-fill" {...props} />
);
