import React from "react";
import { Icon, IconProps } from "../Icon";

export type ParagraphProps = Omit<IconProps, "name">;

export const Paragraph = (props: ParagraphProps) => (
  <Icon name="paragraph" {...props} />
);
