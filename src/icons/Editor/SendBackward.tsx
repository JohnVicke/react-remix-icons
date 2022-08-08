import React from "react";
import { Icon, IconProps } from "../Icon";

export type SendBackwardProps = Omit<IconProps, "name">;

export const SendBackward = (props: SendBackwardProps) => (
  <Icon name="send-backward" {...props} />
);
