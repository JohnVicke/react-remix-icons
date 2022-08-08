import React from "react";
import { Icon, IconProps } from "../Icon";

export type MicOffLineProps = Omit<IconProps, "name">;

export const MicOffLine = (props: MicOffLineProps) => (
  <Icon name="mic-off-line" {...props} />
);
