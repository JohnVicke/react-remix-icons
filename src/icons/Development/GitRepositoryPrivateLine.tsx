import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitRepositoryPrivateLineProps = Omit<IconProps, "name">;

export const GitRepositoryPrivateLine = (
  props: GitRepositoryPrivateLineProps
) => <Icon name="git-repository-private-line" {...props} />;
