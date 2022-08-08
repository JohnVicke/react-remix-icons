import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlarmWarningFillProps = Omit<IconProps, "name">;

export const AlarmWarningFill = (props: AlarmWarningFillProps) => (
  <Icon name="alarm-warning-fill" {...props} />
);
