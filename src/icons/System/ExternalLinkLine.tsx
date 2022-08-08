import React from "react";
import { Icon, IconProps } from "../Icon";

export type ExternalLinkLineProps = Omit<IconProps, "name">;

export const ExternalLinkLine = (props: ExternalLinkLineProps) => (
  <Icon name="external-link-line" {...props} />
);
