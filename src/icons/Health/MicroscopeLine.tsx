import React from "react";
import { Icon, IconProps } from "../Icon";

export type MicroscopeLineProps = Omit<IconProps, "name">;

export const MicroscopeLine = (props: MicroscopeLineProps) => (
  <Icon name="microscope-line" {...props} />
);
