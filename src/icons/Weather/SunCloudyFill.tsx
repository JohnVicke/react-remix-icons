import React from "react";
import { Icon, IconProps } from "../Icon";

export type SunCloudyFillProps = Omit<IconProps, "name">;

export const SunCloudyFill = (props: SunCloudyFillProps) => (
  <Icon name="sun-cloudy-fill" {...props} />
);
