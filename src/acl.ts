export interface Acl {

  id?: number;
  role?: string;
  resource?: string;
  action?: string;
  possession?: string;
  attributes?: string;
}

export interface AclAction {
  id?: number;
  action: string;
}

export interface AclPossession {
  id?: number;
  possession: string;
}

export interface AclResource {
  id?: number;
  resource: string;
}

export interface AclRole {
  id?: number;
  role: string;
  isDefault: boolean;
}

export type AclPartial = Pick<Acl, 'id' | 'role'>;

export function createEmptyAcl(id: number = 0): Acl {
  return {
    id,
    role: 'role',
    resource: 'resource',
    action: 'action',
    possession: 'possession',
    attributes: 'attributes'
  };
}

export function createEmptyAction(id: number = 0): AclAction {
  return {
    id,
    action: 'action'
  };
}

export function createEmptyPossession(id: number = 0): AclPossession {
  return {
    id,
    possession: 'possession'
  };
}

export function createEmptyResource(id: number = 0): AclResource {
  return {
    id,
    resource: 'resource'
  };
}

export function createEmptyAclRole(id: number = 0, isDefault = true): AclRole {
  return {
    id,
    role: 'role',
    isDefault
  }
}