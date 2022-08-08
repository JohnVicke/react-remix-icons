import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArchiveDrawerFillProps = Omit<IconProps, "name">;

export const ArchiveDrawerFill = (props: ArchiveDrawerFillProps) => (
  <Icon name="archive-drawer-fill" {...props} />
);
