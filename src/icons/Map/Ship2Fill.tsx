import React from "react";
import { Icon, IconProps } from "../Icon";

export type Ship2FillProps = Omit<IconProps, "name">;

export const Ship2Fill = (props: Ship2FillProps) => (
  <Icon name="ship-2-fill" {...props} />
);
