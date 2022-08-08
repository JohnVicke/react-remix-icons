import React from "react";
import { Icon, IconProps } from "../Icon";

export type RemoteControl2FillProps = Omit<IconProps, "name">;

export const RemoteControl2Fill = (props: RemoteControl2FillProps) => (
  <Icon name="remote-control-2-fill" {...props} />
);
