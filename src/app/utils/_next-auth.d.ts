import NextAuth from "next-auth";
import { SessionEntity, UserEntity } from "../../service/user/type";

declare module "next-auth" {
    interface Session {
        user: SessionEntity["user"];
    }
    interface User extends UserEntity { }
}