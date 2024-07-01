import { prisma } from "@/lib/db";
import { UserEntity } from "@/service/user/type";

export class UserRepository {
    async createUser(user: UserEntity): Promise<UserEntity> {
        return await prisma.user.create({
            data: user,
        });
    }
}

export const userRepository = new UserRepository();