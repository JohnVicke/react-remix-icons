import React from "react";
import { Icon, IconProps } from "../Icon";

export type StethoscopeFillProps = Omit<IconProps, "name">;

export const StethoscopeFill = (props: StethoscopeFillProps) => (
  <Icon name="stethoscope-fill" {...props} />
);
