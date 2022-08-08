import React from "react";
import { Icon, IconProps } from "../Icon";

export type FirstAidKitLineProps = Omit<IconProps, "name">;

export const FirstAidKitLine = (props: FirstAidKitLineProps) => (
  <Icon name="first-aid-kit-line" {...props} />
);
