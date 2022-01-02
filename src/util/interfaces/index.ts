export interface Option {
  prob: number;
  label: string;
}

export interface OptionType {
  options: Option[];
  label: string;
}
