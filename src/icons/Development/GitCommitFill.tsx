import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitCommitFillProps = Omit<IconProps, "name">;

export const GitCommitFill = (props: GitCommitFillProps) => (
  <Icon name="git-commit-fill" {...props} />
);
