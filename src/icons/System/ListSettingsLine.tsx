import React from "react";
import { Icon, IconProps } from "../Icon";

export type ListSettingsLineProps = Omit<IconProps, "name">;

export const ListSettingsLine = (props: ListSettingsLineProps) => (
  <Icon name="list-settings-line" {...props} />
);
