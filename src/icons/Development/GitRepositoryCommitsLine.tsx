import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitRepositoryCommitsLineProps = Omit<IconProps, "name">;

export const GitRepositoryCommitsLine = (
  props: GitRepositoryCommitsLineProps
) => <Icon name="git-repository-commits-line" {...props} />;
