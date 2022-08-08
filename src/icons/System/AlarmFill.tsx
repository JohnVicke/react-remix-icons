import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlarmFillProps = Omit<IconProps, "name">;

export const AlarmFill = (props: AlarmFillProps) => (
  <Icon name="alarm-fill" {...props} />
);
