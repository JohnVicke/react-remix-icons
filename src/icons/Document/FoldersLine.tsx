import React from "react";
import { Icon, IconProps } from "../Icon";

export type FoldersLineProps = Omit<IconProps, "name">;

export const FoldersLine = (props: FoldersLineProps) => (
  <Icon name="folders-line" {...props} />
);
