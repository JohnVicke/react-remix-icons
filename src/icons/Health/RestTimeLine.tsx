import React from "react";
import { Icon, IconProps } from "../Icon";

export type RestTimeLineProps = Omit<IconProps, "name">;

export const RestTimeLine = (props: RestTimeLineProps) => (
  <Icon name="rest-time-line" {...props} />
);
