import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ColumnsList, localApi } from 'shared/api';
import { toast } from 'react-toastify';

interface IColumnsContext {
  columns: ColumnsList;
  addNewColumn: (columnKey: string) => ColumnsList | null;
  fetchColumns: () => ColumnsList;
}

const initialValues: IColumnsContext = {
  columns: {},
  addNewColumn: () => null,
  fetchColumns: () => ({}),
};

const ColumnsContext = createContext(initialValues);
export const useColumnsContext = () => useContext(ColumnsContext);

export const ColumnsContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [columns, setColumns] = useState<ColumnsList>({});

  const fetchColumns = useCallback(() => {
    const data = localApi.getAllColumns();
    setColumns(data);
    return data;
  }, []);

  const addNewColumn = useCallback((key: string) => {
    const data = localApi.addColumn(key);
    if (!data) {
      toast('Column with this name already exists', {
        type: 'error',
        toastId: 'column-exists',
      });
      return null;
    }

    toast('Column was added!', {
      type: 'success',
      toastId: 'column-added',
    });

    setColumns(data);
    return data;
  }, []);

  useEffect(() => {
    fetchColumns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values: IColumnsContext = useMemo(
    () => ({ fetchColumns, columns, addNewColumn }),
    [columns, fetchColumns, addNewColumn],
  );

  return (
    <ColumnsContext.Provider value={values}>{children}</ColumnsContext.Provider>
  );
};
