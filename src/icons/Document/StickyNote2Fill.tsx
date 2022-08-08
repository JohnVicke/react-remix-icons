import React from "react";
import { Icon, IconProps } from "../Icon";

export type StickyNote2FillProps = Omit<IconProps, "name">;

export const StickyNote2Fill = (props: StickyNote2FillProps) => (
  <Icon name="sticky-note-2-fill" {...props} />
);
