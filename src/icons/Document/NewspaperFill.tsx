import React from "react";
import { Icon, IconProps } from "../Icon";

export type NewspaperFillProps = Omit<IconProps, "name">;

export const NewspaperFill = (props: NewspaperFillProps) => (
  <Icon name="newspaper-fill" {...props} />
);
