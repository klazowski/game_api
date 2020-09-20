import IActionREST from './IActionREST';

export default interface IActionsREST {
  actions: IActionREST[];
  _links: {
    self: {
      href: string;
      methods: HttpMethod[];
    };
  };
}
