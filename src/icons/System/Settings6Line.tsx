import React from "react";
import { Icon, IconProps } from "../Icon";

export type Settings6LineProps = Omit<IconProps, "name">;

export const Settings6Line = (props: Settings6LineProps) => (
  <Icon name="settings-6-line" {...props} />
);
