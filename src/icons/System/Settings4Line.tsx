import React from "react";
import { Icon, IconProps } from "../Icon";

export type Settings4LineProps = Omit<IconProps, "name">;

export const Settings4Line = (props: Settings4LineProps) => (
  <Icon name="settings-4-line" {...props} />
);
