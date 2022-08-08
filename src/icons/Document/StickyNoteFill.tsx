import React from "react";
import { Icon, IconProps } from "../Icon";

export type StickyNoteFillProps = Omit<IconProps, "name">;

export const StickyNoteFill = (props: StickyNoteFillProps) => (
  <Icon name="sticky-note-fill" {...props} />
);
