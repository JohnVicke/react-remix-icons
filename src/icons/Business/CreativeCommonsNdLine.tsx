import React from "react";
import { Icon, IconProps } from "../Icon";

export type CreativeCommonsNdLineProps = Omit<IconProps, "name">;

export const CreativeCommonsNdLine = (props: CreativeCommonsNdLineProps) => (
  <Icon name="creative-commons-nd-line" {...props} />
);
