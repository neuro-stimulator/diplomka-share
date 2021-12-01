import { Acl } from './acl';

export interface User {
	id?: number;
	uuid?: string;
	username?: string;
	email?: string;
	password?: string
	lastLoginDate?: number;
	createdAt?: number;
	updatedAt?: number;
	userGroups?: UserGroups;
	acl?: Acl[];
}

export function createEmptyUser(): User {
	return {
		username: '',
		email: '',
		password: '',
		lastLoginDate: new Date().getTime(),
		acl: []
	}
}

export type UserGroups = Record<number, UserGroupInfo>;
export interface UserGroupInfo {
	id: number;
	name?: string;
}