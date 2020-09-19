import IAction from './IAction';

export default interface IActions {
  actions: IAction[];
  _links: {
    self: {
      href: string;
      methods: HttpMethod[];
    };
  };
}
