import React from "react";
import { Icon, IconProps } from "../Icon";

export type HardDriveFillProps = Omit<IconProps, "name">;

export const HardDriveFill = (props: HardDriveFillProps) => (
  <Icon name="hard-drive-fill" {...props} />
);
