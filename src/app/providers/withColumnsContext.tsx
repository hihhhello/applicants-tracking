import { columnModel } from 'entities/column';

export const withColumnsContext = (component: () => React.ReactNode) => () => {
  const { ColumnsContextProvider } = columnModel;
  return <ColumnsContextProvider>{component()}</ColumnsContextProvider>;
};
