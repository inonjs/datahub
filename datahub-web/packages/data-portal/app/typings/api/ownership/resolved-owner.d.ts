import { ISharedOwner } from 'wherehows-web/typings/api/ownership/owner';

/**
 * Information of a resolved dataset owner
 * @interface IResolvedOwner
 */
export interface IResolvedOwner extends ISharedOwner {
  // Owner name, e.g. the common name from ldap
  name: string;
  // Owner email
  email: string;
  // Flag indicating if the ldap user is active or not
  active: boolean;
}
