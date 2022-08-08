import React from "react";
import { Icon, IconProps } from "../Icon";

export type Settings5LineProps = Omit<IconProps, "name">;

export const Settings5Line = (props: Settings5LineProps) => (
  <Icon name="settings-5-line" {...props} />
);
