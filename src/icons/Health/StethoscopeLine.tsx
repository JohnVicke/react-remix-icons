import React from "react";
import { Icon, IconProps } from "../Icon";

export type StethoscopeLineProps = Omit<IconProps, "name">;

export const StethoscopeLine = (props: StethoscopeLineProps) => (
  <Icon name="stethoscope-line" {...props} />
);
