import React from "react";
import { Icon, IconProps } from "../Icon";

export type Bus2LineProps = Omit<IconProps, "name">;

export const Bus2Line = (props: Bus2LineProps) => (
  <Icon name="bus-2-line" {...props} />
);
