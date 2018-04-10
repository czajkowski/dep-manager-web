// @flow
import React from "react";
import scrollbarSize from "dom-helpers/util/scrollbarSize";
import { AutoSizer } from "react-virtualized";

import { LeftContainerWrapper, HeaderGrid, LeftGrid } from "./styled";
import { LeftHeaderCell, LeftBodyCell } from "./Cells";

type Props = {|
  repos: [],
  scrollTop: number
|};

const LeftContainer = ({ repos, scrollTop }: Props) => {
  return (
    <LeftContainerWrapper>
      <HeaderGrid
        cellRenderer={LeftHeaderCell}
        columnCount={1}
        width={200}
        columnWidth={200}
        rowCount={3}
        height={120}
        rowHeight={40}
      />
      <AutoSizer disableWidth>
        {({ height }) => (
          <LeftGrid
            cellRenderer={LeftBodyCell(repos)}
            columnCount={1}
            width={200}
            columnWidth={200}
            rowCount={repos.length}
            height={height - scrollbarSize()}
            rowHeight={40}
            scrollTop={scrollTop}
            overscanColumnCount={0}
            overscanRowCount={5}
          />
        )}
      </AutoSizer>
    </LeftContainerWrapper>
  );
};

export default LeftContainer;
