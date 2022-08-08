import React from "react";
import { Icon, IconProps } from "../Icon";

export type XboxFillProps = Omit<IconProps, "name">;

export const XboxFill = (props: XboxFillProps) => (
  <Icon name="xbox-fill" {...props} />
);
