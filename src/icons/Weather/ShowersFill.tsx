import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShowersFillProps = Omit<IconProps, "name">;

export const ShowersFill = (props: ShowersFillProps) => (
  <Icon name="showers-fill" {...props} />
);
