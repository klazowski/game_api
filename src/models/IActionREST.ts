import IAction from './IAction';

export default interface IActionREST extends IAction {
  _links: {
    self: {
      href: string;
    };
    actions: {
      href: string;
    };
  };
}
