import React from "react";
import { Icon, IconProps } from "../Icon";

export type StopCircleLineProps = Omit<IconProps, "name">;

export const StopCircleLine = (props: StopCircleLineProps) => (
  <Icon name="stop-circle-line" {...props} />
);
