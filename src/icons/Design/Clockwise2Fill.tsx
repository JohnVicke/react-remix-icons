import React from "react";
import { Icon, IconProps } from "../Icon";

export type Clockwise2FillProps = Omit<IconProps, "name">;

export const Clockwise2Fill = (props: Clockwise2FillProps) => (
  <Icon name="clockwise-2-fill" {...props} />
);
