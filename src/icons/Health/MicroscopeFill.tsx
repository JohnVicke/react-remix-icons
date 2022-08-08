import React from "react";
import { Icon, IconProps } from "../Icon";

export type MicroscopeFillProps = Omit<IconProps, "name">;

export const MicroscopeFill = (props: MicroscopeFillProps) => (
  <Icon name="microscope-fill" {...props} />
);
