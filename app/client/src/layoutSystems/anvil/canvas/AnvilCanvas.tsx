import React, { useCallback } from "react";
import styles from "./styles.module.css";
import type { BaseWidgetProps } from "widgets/BaseWidgetHOC/withBaseWidgetHOC";
import { getAnvilCanvasId } from "./utils";
import { LayoutProvider } from "../layoutComponents/LayoutProvider";
import { useClickToClearSelections } from "./useClickToClearSelections";

export const AnvilCanvas = (props: BaseWidgetProps) => {
  const clickToClearSelections = useClickToClearSelections(props.widgetId);
  const handleOnClickCapture = useCallback(
    (event) => {
      clickToClearSelections(event);
    },
    [clickToClearSelections],
  );

  return (
    <div
      className={styles.anvilCanvas}
      id={getAnvilCanvasId(props.widgetId)}
      onClick={handleOnClickCapture}
    >
      <LayoutProvider {...props} />
    </div>
  );
};
