import React from "react";
import { Icon, IconProps } from "../Icon";

export type DraftFillProps = Omit<IconProps, "name">;

export const DraftFill = (props: DraftFillProps) => (
  <Icon name="draft-fill" {...props} />
);
