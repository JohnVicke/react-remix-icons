import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoonCloudyLineProps = Omit<IconProps, "name">;

export const MoonCloudyLine = (props: MoonCloudyLineProps) => (
  <Icon name="moon-cloudy-line" {...props} />
);
