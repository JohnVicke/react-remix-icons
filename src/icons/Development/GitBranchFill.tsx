import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitBranchFillProps = Omit<IconProps, "name">;

export const GitBranchFill = (props: GitBranchFillProps) => (
  <Icon name="git-branch-fill" {...props} />
);
