import React from "react";
import { Icon, IconProps } from "../Icon";

export type LineFillProps = Omit<IconProps, "name">;

export const LineFill = (props: LineFillProps) => (
  <Icon name="line-fill" {...props} />
);
