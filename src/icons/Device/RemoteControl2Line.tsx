import React from "react";
import { Icon, IconProps } from "../Icon";

export type RemoteControl2LineProps = Omit<IconProps, "name">;

export const RemoteControl2Line = (props: RemoteControl2LineProps) => (
  <Icon name="remote-control-2-line" {...props} />
);
