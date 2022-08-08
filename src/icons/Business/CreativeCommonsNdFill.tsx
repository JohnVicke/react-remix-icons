import React from "react";
import { Icon, IconProps } from "../Icon";

export type CreativeCommonsNdFillProps = Omit<IconProps, "name">;

export const CreativeCommonsNdFill = (props: CreativeCommonsNdFillProps) => (
  <Icon name="creative-commons-nd-fill" {...props} />
);
