import React from "react";
import { Icon, IconProps } from "../Icon";

export type Settings5FillProps = Omit<IconProps, "name">;

export const Settings5Fill = (props: Settings5FillProps) => (
  <Icon name="settings-5-fill" {...props} />
);
