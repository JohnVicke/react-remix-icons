import React from "react";
import { Icon, IconProps } from "../Icon";

export type HardDriveLineProps = Omit<IconProps, "name">;

export const HardDriveLine = (props: HardDriveLineProps) => (
  <Icon name="hard-drive-line" {...props} />
);
