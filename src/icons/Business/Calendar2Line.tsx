import React from "react";
import { Icon, IconProps } from "../Icon";

export type Calendar2LineProps = Omit<IconProps, "name">;

export const Calendar2Line = (props: Calendar2LineProps) => (
  <Icon name="calendar-2-line" {...props} />
);
