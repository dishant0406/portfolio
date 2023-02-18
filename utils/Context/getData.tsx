import { createContext, useContext, useState } from "react";
import { Project, Info } from 'utils/Types';

const dataContext = createContext<{
  projects: Project[]
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>
  info: Info|undefined
  setMyInfo: React.Dispatch<React.SetStateAction<Info|undefined>>
} | null>(null)


type Props = {
  children: React.ReactNode
}

export const DataProvider = ({children}:Props) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [info, setMyInfo] = useState<Info>()
  return (
    <dataContext.Provider value={{
      projects,
      setProjects,
      info,
      setMyInfo
    }}
   >
      {children}
    </dataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(dataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}
