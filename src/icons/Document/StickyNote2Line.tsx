import React from "react";
import { Icon, IconProps } from "../Icon";

export type StickyNote2LineProps = Omit<IconProps, "name">;

export const StickyNote2Line = (props: StickyNote2LineProps) => (
  <Icon name="sticky-note-2-line" {...props} />
);
