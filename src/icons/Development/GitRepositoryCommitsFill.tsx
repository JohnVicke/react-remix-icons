import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitRepositoryCommitsFillProps = Omit<IconProps, "name">;

export const GitRepositoryCommitsFill = (
  props: GitRepositoryCommitsFillProps
) => <Icon name="git-repository-commits-fill" {...props} />;
