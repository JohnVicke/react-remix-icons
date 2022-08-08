import React from "react";
import { Icon, IconProps } from "../Icon";

export type Bus2FillProps = Omit<IconProps, "name">;

export const Bus2Fill = (props: Bus2FillProps) => (
  <Icon name="bus-2-fill" {...props} />
);
