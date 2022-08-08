import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArchiveLineProps = Omit<IconProps, "name">;

export const ArchiveLine = (props: ArchiveLineProps) => (
  <Icon name="archive-line" {...props} />
);
