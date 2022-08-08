import React from "react";
import { Icon, IconProps } from "../Icon";

export type XboxLineProps = Omit<IconProps, "name">;

export const XboxLine = (props: XboxLineProps) => (
  <Icon name="xbox-line" {...props} />
);
