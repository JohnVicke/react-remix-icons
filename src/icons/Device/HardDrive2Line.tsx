import React from "react";
import { Icon, IconProps } from "../Icon";

export type HardDrive2LineProps = Omit<IconProps, "name">;

export const HardDrive2Line = (props: HardDrive2LineProps) => (
  <Icon name="hard-drive-2-line" {...props} />
);
