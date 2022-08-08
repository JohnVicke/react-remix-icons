import React from "react";
import { Icon, IconProps } from "../Icon";

export type WheelchairLineProps = Omit<IconProps, "name">;

export const WheelchairLine = (props: WheelchairLineProps) => (
  <Icon name="wheelchair-line" {...props} />
);
