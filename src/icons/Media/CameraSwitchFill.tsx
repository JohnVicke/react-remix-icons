import React from "react";
import { Icon, IconProps } from "../Icon";

export type CameraSwitchFillProps = Omit<IconProps, "name">;

export const CameraSwitchFill = (props: CameraSwitchFillProps) => (
  <Icon name="camera-switch-fill" {...props} />
);
