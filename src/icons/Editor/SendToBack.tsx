import React from "react";
import { Icon, IconProps } from "../Icon";

export type SendToBackProps = Omit<IconProps, "name">;

export const SendToBack = (props: SendToBackProps) => (
  <Icon name="send-to-back" {...props} />
);
