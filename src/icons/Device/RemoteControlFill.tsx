import React from "react";
import { Icon, IconProps } from "../Icon";

export type RemoteControlFillProps = Omit<IconProps, "name">;

export const RemoteControlFill = (props: RemoteControlFillProps) => (
  <Icon name="remote-control-fill" {...props} />
);
