import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderKeyholeLineProps = Omit<IconProps, "name">;

export const FolderKeyholeLine = (props: FolderKeyholeLineProps) => (
  <Icon name="folder-keyhole-line" {...props} />
);
