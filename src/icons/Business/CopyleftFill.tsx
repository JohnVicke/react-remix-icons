import React from "react";
import { Icon, IconProps } from "../Icon";

export type CopyleftFillProps = Omit<IconProps, "name">;

export const CopyleftFill = (props: CopyleftFillProps) => (
  <Icon name="copyleft-fill" {...props} />
);
