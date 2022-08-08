import React from "react";
import { Icon, IconProps } from "../Icon";

export type OpenSourceFillProps = Omit<IconProps, "name">;

export const OpenSourceFill = (props: OpenSourceFillProps) => (
  <Icon name="open-source-fill" {...props} />
);
