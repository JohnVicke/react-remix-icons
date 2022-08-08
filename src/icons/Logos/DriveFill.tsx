import React from "react";
import { Icon, IconProps } from "../Icon";

export type DriveFillProps = Omit<IconProps, "name">;

export const DriveFill = (props: DriveFillProps) => (
  <Icon name="drive-fill" {...props} />
);
