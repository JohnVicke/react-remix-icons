import React from "react";
import { Icon, IconProps } from "../Icon";

export type NewspaperLineProps = Omit<IconProps, "name">;

export const NewspaperLine = (props: NewspaperLineProps) => (
  <Icon name="newspaper-line" {...props} />
);
