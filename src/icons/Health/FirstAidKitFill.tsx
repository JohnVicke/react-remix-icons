import React from "react";
import { Icon, IconProps } from "../Icon";

export type FirstAidKitFillProps = Omit<IconProps, "name">;

export const FirstAidKitFill = (props: FirstAidKitFillProps) => (
  <Icon name="first-aid-kit-fill" {...props} />
);
