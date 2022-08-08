import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoonCloudyFillProps = Omit<IconProps, "name">;

export const MoonCloudyFill = (props: MoonCloudyFillProps) => (
  <Icon name="moon-cloudy-fill" {...props} />
);
