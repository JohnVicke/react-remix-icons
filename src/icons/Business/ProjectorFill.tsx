import React from "react";
import { Icon, IconProps } from "../Icon";

export type ProjectorFillProps = Omit<IconProps, "name">;

export const ProjectorFill = (props: ProjectorFillProps) => (
  <Icon name="projector-fill" {...props} />
);
