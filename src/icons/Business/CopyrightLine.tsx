import React from "react";
import { Icon, IconProps } from "../Icon";

export type CopyrightLineProps = Omit<IconProps, "name">;

export const CopyrightLine = (props: CopyrightLineProps) => (
  <Icon name="copyright-line" {...props} />
);
