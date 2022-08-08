import React from "react";
import { Icon, IconProps } from "../Icon";

export type TimeLineProps = Omit<IconProps, "name">;

export const TimeLine = (props: TimeLineProps) => (
  <Icon name="time-line" {...props} />
);
