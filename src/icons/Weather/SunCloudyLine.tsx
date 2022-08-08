import React from "react";
import { Icon, IconProps } from "../Icon";

export type SunCloudyLineProps = Omit<IconProps, "name">;

export const SunCloudyLine = (props: SunCloudyLineProps) => (
  <Icon name="sun-cloudy-line" {...props} />
);
