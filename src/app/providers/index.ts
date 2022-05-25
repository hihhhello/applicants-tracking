import compose from 'compose-function';
import { withColumnsContext } from './withColumnsContext';
import { withRouter } from './withRouter';

export const withProviders = compose(withRouter, withColumnsContext);
