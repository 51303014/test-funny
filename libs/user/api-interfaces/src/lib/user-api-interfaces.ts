import { IsEmail, IsNotEmpty, IsUrl, MaxLength } from 'class-validator';
import { IBase } from '@realworld/shared/client-server';
// Login
export abstract class ILoginUser {
    @IsEmail()
    email: string
    @IsNotEmpty()
    password: string
}


// Register
export abstract class INewUser {
    @IsEmail()
    @MaxLength(60)
    email: string
    @IsNotEmpty()
    @MaxLength(200)
    password: string
}

// User response
export abstract class IUser extends IBase {
    email: string
    token: string
    bio: string
    image: string
}


// Update user
export abstract class IUpdateUser {
    @IsEmail()
    @MaxLength(60)
    email: string
    @IsNotEmpty()
    @MaxLength(255)
    password: string
    @MaxLength(1000)
    bio: string
    @IsUrl()
    image: string
}

// Profile
export abstract class IProfile extends IBase {
    email: string
    bio: string
    image: string
    following: boolean
}
