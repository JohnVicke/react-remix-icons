import React from "react";
import { Icon, IconProps } from "../Icon";

export type CameraSwitchLineProps = Omit<IconProps, "name">;

export const CameraSwitchLine = (props: CameraSwitchLineProps) => (
  <Icon name="camera-switch-line" {...props} />
);
