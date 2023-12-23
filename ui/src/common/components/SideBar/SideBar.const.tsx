interface IEntry {
  id: string,
  label: string,
  onClick?: Function
}

interface ISideBar {
  entries: IEntry[]
}

export type {
  IEntry,
  ISideBar
}
