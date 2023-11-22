import { Model } from 'mongoose'

export type IUser = {
  name: string
  email: string
  password: string
}

export type UserModel = {
  isUserExists(email: string): Promise<Pick<IUser, 'email' | 'password'>>
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>
} & Model<IUser>
