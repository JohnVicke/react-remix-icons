import React from "react";
import { Icon, IconProps } from "../Icon";

export type Settings6FillProps = Omit<IconProps, "name">;

export const Settings6Fill = (props: Settings6FillProps) => (
  <Icon name="settings-6-fill" {...props} />
);
