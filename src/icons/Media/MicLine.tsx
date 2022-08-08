import React from "react";
import { Icon, IconProps } from "../Icon";

export type MicLineProps = Omit<IconProps, "name">;

export const MicLine = (props: MicLineProps) => (
  <Icon name="mic-line" {...props} />
);
