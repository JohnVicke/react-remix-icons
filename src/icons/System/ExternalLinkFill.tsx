import React from "react";
import { Icon, IconProps } from "../Icon";

export type ExternalLinkFillProps = Omit<IconProps, "name">;

export const ExternalLinkFill = (props: ExternalLinkFillProps) => (
  <Icon name="external-link-fill" {...props} />
);
