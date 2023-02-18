export type Project = {
  _id: string
  name: string
  description: string
  image:string[]
  _type:string
  _createdAt:string
  _updatedAt:string
  _rev:string
  tags:string[]
  live:string
  github:string,
  isLatest:boolean
}

export type Info = {
  _id:string,
  name:string,
  about:string,
  company:string,
  email:string,
  github:string,
  linkedin:string,
  twitter:string,
  job:string,
  role:string,
  skills:string[],
  image:string,
  resume:string,
  resumeImage:string
}