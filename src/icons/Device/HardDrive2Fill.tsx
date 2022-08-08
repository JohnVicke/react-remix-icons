import React from "react";
import { Icon, IconProps } from "../Icon";

export type HardDrive2FillProps = Omit<IconProps, "name">;

export const HardDrive2Fill = (props: HardDrive2FillProps) => (
  <Icon name="hard-drive-2-fill" {...props} />
);
