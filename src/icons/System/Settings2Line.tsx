import React from "react";
import { Icon, IconProps } from "../Icon";

export type Settings2LineProps = Omit<IconProps, "name">;

export const Settings2Line = (props: Settings2LineProps) => (
  <Icon name="settings-2-line" {...props} />
);
