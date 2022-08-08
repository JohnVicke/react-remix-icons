import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderKeyholeFillProps = Omit<IconProps, "name">;

export const FolderKeyholeFill = (props: FolderKeyholeFillProps) => (
  <Icon name="folder-keyhole-fill" {...props} />
);
