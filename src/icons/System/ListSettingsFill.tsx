import React from "react";
import { Icon, IconProps } from "../Icon";

export type ListSettingsFillProps = Omit<IconProps, "name">;

export const ListSettingsFill = (props: ListSettingsFillProps) => (
  <Icon name="list-settings-fill" {...props} />
);
