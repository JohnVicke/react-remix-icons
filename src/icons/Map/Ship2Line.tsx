import React from "react";
import { Icon, IconProps } from "../Icon";

export type Ship2LineProps = Omit<IconProps, "name">;

export const Ship2Line = (props: Ship2LineProps) => (
  <Icon name="ship-2-line" {...props} />
);
