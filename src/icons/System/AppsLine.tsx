import React from "react";
import { Icon, IconProps } from "../Icon";

export type AppsLineProps = Omit<IconProps, "name">;

export const AppsLine = (props: AppsLineProps) => (
  <Icon name="apps-line" {...props} />
);
