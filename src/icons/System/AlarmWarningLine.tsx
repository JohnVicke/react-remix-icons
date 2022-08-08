import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlarmWarningLineProps = Omit<IconProps, "name">;

export const AlarmWarningLine = (props: AlarmWarningLineProps) => (
  <Icon name="alarm-warning-line" {...props} />
);
