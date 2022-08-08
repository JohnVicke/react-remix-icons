import React from "react";
import { Icon, IconProps } from "../Icon";

export type RobotLineProps = Omit<IconProps, "name">;

export const RobotLine = (props: RobotLineProps) => (
  <Icon name="robot-line" {...props} />
);
