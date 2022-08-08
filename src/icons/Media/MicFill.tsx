import React from "react";
import { Icon, IconProps } from "../Icon";

export type MicFillProps = Omit<IconProps, "name">;

export const MicFill = (props: MicFillProps) => (
  <Icon name="mic-fill" {...props} />
);
