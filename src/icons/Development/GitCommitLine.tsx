import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitCommitLineProps = Omit<IconProps, "name">;

export const GitCommitLine = (props: GitCommitLineProps) => (
  <Icon name="git-commit-line" {...props} />
);
