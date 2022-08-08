import React from "react";
import { Icon, IconProps } from "../Icon";

export type Battery2FillProps = Omit<IconProps, "name">;

export const Battery2Fill = (props: Battery2FillProps) => (
  <Icon name="battery-2-fill" {...props} />
);
