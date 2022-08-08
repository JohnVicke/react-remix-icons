import React from "react";
import { Icon, IconProps } from "../Icon";

export type Settings3LineProps = Omit<IconProps, "name">;

export const Settings3Line = (props: Settings3LineProps) => (
  <Icon name="settings-3-line" {...props} />
);
