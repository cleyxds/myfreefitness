type StateCreation = "IN_PROGRESS" | "ARCHIVED" | "INVITATION" | "ALL"

type Creation = {
  id: string
  createdAt: Date
  updatedAt: Date
  createdBy: string
  updatedBy: string
  state: StateCreation
  deletedBy?: string
  deletedAt?: Date
  equipId?: string
  logs?: Log[]
}

type User = Creation & {
  fullname: string
  email: string
  phone: string
  password?: string
  imgProfilURL?: string
  imgProfilPATH?: string
  address?: Address
  profile?: Profile
}
