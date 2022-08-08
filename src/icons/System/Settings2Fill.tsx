import React from "react";
import { Icon, IconProps } from "../Icon";

export type Settings2FillProps = Omit<IconProps, "name">;

export const Settings2Fill = (props: Settings2FillProps) => (
  <Icon name="settings-2-fill" {...props} />
);
