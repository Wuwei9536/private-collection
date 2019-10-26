import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {
  Chessboard,
  DustbinSingleTarget,
  DustbinMultipleTargets,
  DustbinCopyOrMove,
  DustbinSingleTargetInIframe,
  DustbinStressTest,
  DragAroundCustomDragLayer,
  DragAroundNaive,
  NestingDragSources,
  NestingDropTargets,
  SortableCancelOnDropOutside,
  SortableSimple,
  SortableStressTest,
  CustomizeDropEffects,
  CustomizeHandlesAndPreviews,
  DragSourceRerender,
  RemountWithCorrectProps,
  OtherNativeFiles,
  OtherChainedConnectors,
} from './hooks';

const Drag = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <a>http://react-dnd.github.io/react-dnd/examples</a>
      <Chessboard />
      <DustbinSingleTarget />
      <DustbinMultipleTargets />
      <DustbinCopyOrMove />
      <DustbinSingleTargetInIframe />
      <DustbinStressTest />
      <DragAroundCustomDragLayer />
      <DragAroundNaive />
      <NestingDragSources />
      <NestingDropTargets />
      <SortableCancelOnDropOutside />
      <SortableSimple />
      {/* <SortableStressTest /> */}
      <CustomizeDropEffects />
      <CustomizeHandlesAndPreviews />
      <DragSourceRerender />
      <RemountWithCorrectProps />
      <OtherNativeFiles />
      <OtherChainedConnectors />
    </DndProvider>
  );
};

export default Drag;
