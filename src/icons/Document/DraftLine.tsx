import React from "react";
import { Icon, IconProps } from "../Icon";

export type DraftLineProps = Omit<IconProps, "name">;

export const DraftLine = (props: DraftLineProps) => (
  <Icon name="draft-line" {...props} />
);
