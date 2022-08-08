import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArchiveFillProps = Omit<IconProps, "name">;

export const ArchiveFill = (props: ArchiveFillProps) => (
  <Icon name="archive-fill" {...props} />
);
