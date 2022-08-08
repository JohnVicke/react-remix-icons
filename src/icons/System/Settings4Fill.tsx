import React from "react";
import { Icon, IconProps } from "../Icon";

export type Settings4FillProps = Omit<IconProps, "name">;

export const Settings4Fill = (props: Settings4FillProps) => (
  <Icon name="settings-4-fill" {...props} />
);
