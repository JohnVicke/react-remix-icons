import React from "react";
import { Icon, IconProps } from "../Icon";

export type WheelchairFillProps = Omit<IconProps, "name">;

export const WheelchairFill = (props: WheelchairFillProps) => (
  <Icon name="wheelchair-fill" {...props} />
);
