import React from "react";
import { Icon, IconProps } from "../Icon";

export type Battery2LineProps = Omit<IconProps, "name">;

export const Battery2Line = (props: Battery2LineProps) => (
  <Icon name="battery-2-line" {...props} />
);
