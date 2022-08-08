import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlarmLineProps = Omit<IconProps, "name">;

export const AlarmLine = (props: AlarmLineProps) => (
  <Icon name="alarm-line" {...props} />
);
