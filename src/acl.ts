export interface Acl {

  id?: number;
  role?: string;
  resource?: string;
  action?: string;
  possession?: string;
  attributes?: string;
}

export interface AclRole {
  id?: number;
  role: string;
  isDefault: boolean;
}

export type AclPartial = Pick<Acl, 'id' | 'role'>;

export function createEmptyAcl(id = 0): Acl {
  return {
    id,
    role: 'role',
    resource: 'resource',
    action: 'action',
    possession: 'possesion',
    attributes: 'attributes'
  };
}

export function createEmptyAclRole(id = 0, isDefault = true): AclRole {
  return {
    id,
    role: 'role',
    isDefault
  }
}