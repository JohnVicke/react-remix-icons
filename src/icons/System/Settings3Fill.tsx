import React from "react";
import { Icon, IconProps } from "../Icon";

export type Settings3FillProps = Omit<IconProps, "name">;

export const Settings3Fill = (props: Settings3FillProps) => (
  <Icon name="settings-3-fill" {...props} />
);
