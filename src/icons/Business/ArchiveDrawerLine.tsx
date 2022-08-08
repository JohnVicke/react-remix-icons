import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArchiveDrawerLineProps = Omit<IconProps, "name">;

export const ArchiveDrawerLine = (props: ArchiveDrawerLineProps) => (
  <Icon name="archive-drawer-line" {...props} />
);
