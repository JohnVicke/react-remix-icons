import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitRepositoryPrivateFillProps = Omit<IconProps, "name">;

export const GitRepositoryPrivateFill = (
  props: GitRepositoryPrivateFillProps
) => <Icon name="git-repository-private-fill" {...props} />;
