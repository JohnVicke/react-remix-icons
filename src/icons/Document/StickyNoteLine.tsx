import React from "react";
import { Icon, IconProps } from "../Icon";

export type StickyNoteLineProps = Omit<IconProps, "name">;

export const StickyNoteLine = (props: StickyNoteLineProps) => (
  <Icon name="sticky-note-line" {...props} />
);
