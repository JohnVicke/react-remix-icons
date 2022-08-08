import React from "react";
import { Icon, IconProps } from "../Icon";

export type CopyrightFillProps = Omit<IconProps, "name">;

export const CopyrightFill = (props: CopyrightFillProps) => (
  <Icon name="copyright-fill" {...props} />
);
