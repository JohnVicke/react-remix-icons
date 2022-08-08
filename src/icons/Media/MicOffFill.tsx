import React from "react";
import { Icon, IconProps } from "../Icon";

export type MicOffFillProps = Omit<IconProps, "name">;

export const MicOffFill = (props: MicOffFillProps) => (
  <Icon name="mic-off-fill" {...props} />
);
