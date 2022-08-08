import React from "react";
import { Icon, IconProps } from "../Icon";

export type Calendar2FillProps = Omit<IconProps, "name">;

export const Calendar2Fill = (props: Calendar2FillProps) => (
  <Icon name="calendar-2-fill" {...props} />
);
