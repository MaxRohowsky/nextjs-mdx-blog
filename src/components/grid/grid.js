import styles from './grid.module.scss'

const GridComponent = () => {
    const rows = 8;
    const columns = 12;
  
    const generateGrid = () => {
      const gridItems = [];
  
      for (let y = 1; y <= rows; y++) {
        for (let x = 1; x <= columns; x++) {
          const isLastColumn = x === columns;
          const isLastRow = y === rows;
  
          const gridColumnStyle = {
            '--x': x,
            '--y': y,
          };
  
          if (isLastColumn) gridColumnStyle['borderRight'] = 'none';
          if (isLastRow) gridColumnStyle['borderBottom'] = 'none';
  
          const gridItem = (
            <div
              key={`${x}-${y}`}
              aria-hidden="true"
              className={styles.gridColumn}
              style={gridColumnStyle}
            ></div>
          );
  
          gridItems.push(gridItem);
        }
      }
  
      return gridItems;
    };
  
    return <div className={styles.gridContainer}>{generateGrid()}</div>;
  };
  
  export default GridComponent;