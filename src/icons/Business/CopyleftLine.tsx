import React from "react";
import { Icon, IconProps } from "../Icon";

export type CopyleftLineProps = Omit<IconProps, "name">;

export const CopyleftLine = (props: CopyleftLineProps) => (
  <Icon name="copyleft-line" {...props} />
);
