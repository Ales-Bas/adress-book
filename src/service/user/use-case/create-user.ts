import { ROLES, UserEntity } from "@/service/user/type";
import { userRepository } from "../user-repository";
import { createId } from "@/lib/id";

type CreateUser = {
    email: string;
    name?: string | null;
    image?: string | null;
    emailVerified?: Date | null;
}

export class CreateUserUseCase {
    async exec(data: CreateUser) {
        const role = ROLES.USER;

        const user: UserEntity = {
            id: createId(),
            role,
            ...data,
        };
        return await userRepository.createUser(user);
    }
}

export const createUserUseCase = new CreateUserUseCase();