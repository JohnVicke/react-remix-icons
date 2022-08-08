import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitBranchLineProps = Omit<IconProps, "name">;

export const GitBranchLine = (props: GitBranchLineProps) => (
  <Icon name="git-branch-line" {...props} />
);
