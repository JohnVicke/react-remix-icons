import React from "react";
import { Icon, IconProps } from "../Icon";

export type RemoteControlLineProps = Omit<IconProps, "name">;

export const RemoteControlLine = (props: RemoteControlLineProps) => (
  <Icon name="remote-control-line" {...props} />
);
